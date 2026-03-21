import { useState, useEffect } from "react";

// 1. Define the exact shape of your MongoDB document
export interface Product {
  _id: string; // MongoDB always returns _id as a string
  productName: string;
  hsCode?: string; // The '?' means these fields are optional/can be empty
  description?: string;
  rate?: string;
  availability: "Available" | "Unavailable"; // Strict union type
}

export const ProductList = () => {
  // 2. Add TypeScript generics <Type> to your state hooks
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://website-avskexim-admin-backend.onrender.com/api/products/all");
        
        if (!response.ok) throw new Error("Failed to fetch products");
        
        // 3. Tell TypeScript that the JSON data matches our Product array interface
        const data: Product[] = await response.json();
        setProducts(data);
        setIsLoading(false);
      } catch (err) {
        // TypeScript requires us to check the error type
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 text-white bg-slate-900 rounded-lg mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Product Database</h2>
        
        {/* 4. Type the onChange event implicitly via React */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
          className="p-2 rounded bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-indigo-500 w-64"
        />
      </div>

      {isLoading && <p className="text-indigo-400">Loading products...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {!isLoading && !error && products.length === 0 && (
        <p className="text-slate-400">No products found in the database yet.</p>
      )}

      {!isLoading && !error && products.length > 0 && filteredProducts.length === 0 && (
        <p className="text-slate-400">No products match your search.</p>
      )}

      {!isLoading && !error && filteredProducts.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-700 text-slate-300">
                <th className="p-3">Product Name</th>
                <th className="p-3">HS Code</th>
                <th className="p-3">Description</th>
                <th className="p-3">Rate</th>
                <th className="p-3">Availability</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product._id} className="border-b border-slate-800 hover:bg-slate-800 transition-colors">
                  <td className="p-3 font-medium text-indigo-300">{product.productName}</td>
                  <td className="p-3">{product.hsCode || "N/A"}</td>
                  <td className="p-3 text-slate-400">{product.description || "N/A"}</td>
                  <td className="p-3">{product.rate || "N/A"}</td>
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      product.availability === 'Available' 
                        ? 'bg-green-900 text-green-300' 
                        : 'bg-red-900 text-red-300'
                    }`}>
                      {product.availability}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};