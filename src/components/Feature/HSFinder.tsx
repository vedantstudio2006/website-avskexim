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

      <div
        className="result"
        id="resultContainer"
        style={{ display: result ? "block" : "none" }}
      >
        {error && <p style={{ color: "red" }}>{error}</p>}
        {typeof result === "string" ? (
          <p>{result}</p>
        ) : result ? (
          <>
            <div>
              <span className="inner-result">
                <h3>HS Code: </h3>
                {result.hsCode}
              </span>
            </div>
            <div className="line"></div>
            <div>
              <span className="inner-result">
                <h3>Description: </h3>
                {result.description}
              </span>
            </div>
            <div className="line"></div>
            <div>
              <span className="inner-result">
                <h3>Availability: </h3>
                {result.availability}
              </span>
            </div>
          </>
        ) : (
          <p>No Data found</p>
        )}
      </div>
    </>
  );
};
