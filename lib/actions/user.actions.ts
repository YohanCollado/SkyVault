'use server'; // to make sure this is never ran on the clients side

/* create account flow
1. the user enters full name and email
2. check is the user already exists using that email entered, if user doesnt exists we create a new document 
3. if user does not exists, procced and sent OTP verification to users email
4. this will send a secret key for creating a session
5. create a new user document if the user is a new user
6. return the users accountID that will be used to complete the log in 
7. vefify the OTP and autheticate the log in
*/

import { createAdminClient} from "@/lib/appwrite"
import { appwriteConfig } from "../appwrite/config";
import { Query, ID } from "node-appwrite";
import { parseStringify } from "@/lib/utils";

const getUserByEmail = async (email: string) => {
    const {databases} = await createAdminClient();

    const result = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.usersTableId,
        [Query.equal("email", email)]
    );

    return result.total > 0 ? result.documents[0] : null;
};

const handleError = (error: unknown, message: string) => {
    console.log(error, message);
    throw error;
};

const sendEmailOTP = async ({email}: {email: string}) => {
    const {account} = await createAdminClient();

    try {
        const session = await account.createEmailToken(ID.unique(), email);
        return session.userId;
    } catch (error) {
        handleError(error, "Failed to send email")
    }
};



//something going on here
export const createAccount = async ({fullName, email}: {fullName: string , email: string }) =>{
    const existingUser = await getUserByEmail(email);

    const accountId = await sendEmailOTP({email})
    if(!accountId) throw new Error("Failed to send email");

    if(!existingUser) {
      const {databases} = await createAdminClient();  

      await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.usersTableId,
        ID.unique(),{
            fullName,
            email, 
            avatar:"//www.kindpng.com/picc/m/207-2074624_white-gray-circle-avatar-png-transparent-png.png",
            accountId,
        },
      );
    }
    return parseStringify({accountId})
};
