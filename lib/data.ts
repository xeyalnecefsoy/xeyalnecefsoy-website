import { databases, appwriteConfig } from './appwrite';
import { Query } from 'appwrite';

export interface Project {
  $id: string;
  title: { en: string; az: string };
  desc: { en: string; az: string };
  slug: string;
  image: string; // URL
  category: 'web' | 'ecommerce' | 'saas' | 'landing';
  content?: string; // Rich text or HTML
  link?: string;
  technologies?: string[]; // Array of strings
}

export async function getProjects() {
  try {
    const response = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.projectsCollectionId,
      [Query.orderDesc('$createdAt')]
    );
    
    // Parse the JSON fields for multi-language support
    const projects = response.documents.map(doc => ({
      ...doc,
      title: typeof doc.title === 'string' ? JSON.parse(doc.title) : doc.title,
      desc: typeof doc.desc === 'string' ? JSON.parse(doc.desc) : doc.desc,
    })) as unknown as Project[];

    return projects;
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return [];
  }
}
