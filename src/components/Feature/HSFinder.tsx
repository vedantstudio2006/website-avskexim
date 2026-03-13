import { useState } from "react";
import "../utils/HsCodeData";
import { useHsCode } from "../utils/HsCodeData";


export const HSFinder = () => {
  const [searchInput, setSearchInput] = useState<string>("");

  const { result, error, isLoading, searchHsCode } = useHsCode();

  const handleSearchClick = () => {
    searchHsCode(searchInput);
    setSearchInput("");
  };

  return (
    <>
      <div className="hs-header">
        <h2>HS Code Finder</h2>
      </div>

      <div className="search-bar">
        <div>
          <input
            type="text"
            className="hs-finder"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            id="search-input"
          />
        </div>
        <div>
          <button
            className="finder-btn"
            onClick={handleSearchClick}
            disabled={isLoading}
            id="searchBtn"
          >
            {isLoading ? "Searching..." : "Search"}
          </button>
        </div>
      </div>

      <div className="result" id="resultContainer" style={{ display: result ? "block" : "none"}}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {result && <div><h3>Description: </h3>{result}</div>}
      </div>
    </>
  );
};
