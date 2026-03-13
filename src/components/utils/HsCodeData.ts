import { useState } from "react";
import { Client, Databases, Query, type Models } from "appwrite";

// 1. Initialize Appwrite
const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1") 
  .setProject("69b15d0e0016df9b8d3d");              

const databases = new Databases(client);

export interface HsCodeDocument extends Models.Document {
  hscode: string;
  description?: string;
}

// 2. Create the Custom Hook
export function useHsCode() {
  // All the state lives here now, instead of the UI file
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // The main search function
  const searchHsCode = async (searchQuery: string) => {
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await databases.listDocuments<HsCodeDocument>(
        "69b15d2f002e28a585f8", 
        "hs_code", 
        [Query.equal("hscode", searchQuery)]
      );

      if (response.documents.length === 0) {
        setResult(`No data found for HS Code : ${searchQuery}`);
      } else {
        setResult(response.documents[0].description || "No description available");
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      setError(`Error fetching data: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Export the states and the function so the UI can use them
  return {
    result,
    error,
    isLoading,
    searchHsCode
  };
}