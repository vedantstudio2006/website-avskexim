import { useState } from "react";

// Define the shape of the data coming from your Express backend
export interface ProductResponse {
  id: string;
  productName: string;
  hsCode: string;
  description: string;
  rate: string;
  availability: string;
}

export function useHsCode() {
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const searchHsCode = async (searchQuery: string) => {
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const API_URL = "https://website-avskexim-admin-backend.onrender.com"; 

      // Fetching from your GET route
      const response = await fetch(`${API_URL}/api/products?name=${encodeURIComponent(searchQuery)}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ProductResponse | null = await response.json();

      if (!data) {
        setResult(`No data found for: ${searchQuery}`);
      } else {
        // Formatting the result to show both the Name, HS Code, and Description
        setResult(`${data}`);
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      setError(`Error fetching data: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };

  return { result, error, isLoading, searchHsCode };
}