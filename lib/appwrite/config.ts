export const appwriteConfig = {
    endpointUrl: process.env.APPWRITE_ENDPOINT!,
    projectId: process.env.APPWRITE_PROJECT!,
    databaseId: process.env.APPWRITE_DATABASE!,
    usersTableId: process.env.APPWRITE_USERS_TABLE!,
    filesTableId: process.env.APPWRITE_FILES_TABLE!,
    bucketId: process.env.APPWRITE_BUCKET!,
    secretKey: process.env.APPWRITE_KEY!,
};