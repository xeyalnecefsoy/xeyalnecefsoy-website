import { Client, Account, Databases, Storage } from 'appwrite';

export const client = new Client();

client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1')
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '');

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

export const appwriteConfig = {
  databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || 'main',
  projectsCollectionId: process.env.NEXT_PUBLIC_APPWRITE_PROJECTS_COLLECTION_ID || 'projects',
  blogCollectionId: process.env.NEXT_PUBLIC_APPWRITE_BLOG_COLLECTION_ID || 'blog',
};
