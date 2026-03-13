

export const HsCodeInfo = () => {
  return (
    <>
      <div className="line"></div>
      <br />
      <br />
      <div className="info">
        <div className="what" data-aos="fade-right" data-aos-duration={1000}>
          <h1 className="title">What is an HS Code?</h1>
          <p>
            An HS Code (Harmonized System Code) is a standardized numerical
            method of classNameifying traded products. Developed by the World
            Customs Organization (WCO), it is used by over 200 countries to
            identify what exactly is inside a shipping container without needing
            a translation.
          </p>
        </div>

        <hr />

        <div
          className="structure"
          data-aos="fade-left"
          data-aos-duration={1000}
        >
          <h1>The Structure</h1>
          <h3>A standard HS code is typically 6 to 10 digits long:</h3>
          <ul className="inner-list">
            <li>
              First 2 digits (Chapter): The br/oad category (e.g., Coffee, Tea,
              and Spices).
            </li>
            <li>
              Next 2 digits (Heading): The specific type within that category
              (e.g., Coffee).
            </li>
            <li>
              Next 2 digits (Sub-heading): More specific details (e.g., Roasted
              coffee, decaffeinated).
            </li>
            <li>
              Extra digits (National Tariff): Countries add 2–4 extra digits for
              specific local taxes or statistical tracking.
            </li>
          </ul>
        </div>
      </div>

      <br />
      <br />

      <br />
      <br />

      <div className="info">
        <div className="what" data-aos="fade-right" data-aos-duration={1000}>
          <h1 className="title">Why are they Important?</h1>
          <ul>
            <li>
              Tax & Duty Calculation: Customs authorities use the code to
              determine how much import duty and tax (like GST or VAT) you must
              pay.
            </li>
            <li>
              Regulatory Compliance: Some codes trigger "Red Flags." If you use
              a code for a restricted item (like chemicals or electronics), you
              may need special permits.
            </li>
            <li>
              Trade Statistics: Governments use these codes to track which goods
              are entering and leaving the country to monitor the economy
            </li>
            <li>
              Avoiding Delays: Incorrect codes lead to "Customs Holds." Your
              shipment could be stuck for weeks, or you could face heavy fines
              for "misclassNameification."
            </li>
          </ul>
        </div>

        <hr />

        <div
          className="structure"
          data-aos="fade-left"
          data-aos-duration={1000}
        >
          <h1>How to Use HS Codes</h1>
          <h3>A standard HS code is typically 6 to 10 digits long:</h3>
          <ul>
            <li>
              <b>Step A: Identification</b>
              <ul className="inner-list">
                <li>
                  Official Tariff Books: Each country has one (e.g., the HTS in
                  the US or the ITC-HS in India).
                </li>
                <li>
                  Online Search Tools: Many government customs websites have
                  searchable databases.
                </li>
                <li>
                  AI & APIs: Many modern EXIM platforms use APIs to
                  automatically suggest codes based on product descriptions.
                </li>
              </ul>
            </li>
            <li>
              <b>Step B: Documentation</b>
              <br />
              Once identified, the HS code must be clearly printed on all major
              shipping documents, including:
              <ul className="inner-list">
                <li>Commercial Invoice</li>
                <li>Packing List</li>
                <li>Bill of Landing</li>
                <li>Certificate of Origin</li>
              </ul>
            </li>
            <li>
              <b>Step C: Verification:</b> <br />
              Rules change every few years (the WCO updates the system every 5
              years). Always double-check that your code is still valid for the
              current year to avoid "legacy code" errors.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
