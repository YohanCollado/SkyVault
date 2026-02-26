export const appwriteConfig = {
    endpointUrl: process.env.APPWRITE_ENDPOINT || "https://sfo.cloud.appwrite.io/v1",
    projectId: process.env.APPWRITE_PROJECT || "699e76f2001168fbe6c3",
    databaseId: process.env.APPRWITE_DATABASE || "699e77c90016a2c1ea49",
    usersTableId: process.env.APPWRITE_USERS_TABLE || "users",
    filesTableId: process.env.APPWRITE_FILES_TABLE || "files",
    bucketId: process.env.APPWRITE_BUCKET || "699e9a80003e13b84ae3",
    secretKey: process.env.APPWRITE_KEY || "standard_9377206ee62ce75dc2d0fd35e790b0d9c0b63cda7ccf76a6e02ef1083bf97993253291b4c4e760b3f52d2738a8ab1a1404cbf2c9b2dee4169b6b62db97d401bc8d07d3a9202acc2b318e43e5513c4dc720f5a23f5cde1ba12ece9828013babbde23ca4861cb5a7dc2280c915f503c4c261720cf1bcffa729b3fddeea22045bc0"
}