
import { Client, Databases ,ID, type Models } from "appwrite";

// 1. Initialize Appwrite
const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("69b15d0e0016df9b8d3d");

const databases = new Databases(client);

export async function registerUser(
  name: string, 
  email: string, 
  phone: string
): Promise<Models.Document> {
  try {
    const response = await databases.createDocument(
      "69b15d2f002e28a585f8", // Database ID
      "users",                // Collection ID
      ID.unique(), 
      {
        fullname: name,
        email: email,
        phoneNumber: phone,
      }
    );

    return response;
  } catch (error) {
    console.error("Database error in registerUser:", error);
    // Throw the error so the React component can catch it and show it to the user
    throw error; 
  }
}