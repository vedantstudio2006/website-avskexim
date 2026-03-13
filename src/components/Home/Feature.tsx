import { useSectionNavigation } from "../utils/NavigatePage";

export const Feature = () => {
  const navigateToSection = useSectionNavigation();

  return (
    <>
      <br />
      <br />
      <div className="feature">
        <div>
          <h1 className="feature-title">Feature</h1>
          <div className="line"></div>
        </div>
        <div className="cards">
          <h3
            className="text-left text"
            data-aos="fade-right"
            onClick={() => navigateToSection("/HSCode", "hs-code-search")}
          >
            HS Code Finder/Search
          </h3>
          <h3 className="text-right text" data-aos="fade-left">
            Compliance & Certification Badges
          </h3>
          <h3 className="text-left text" data-aos="fade-right">
            Detailed Documentation Guides
          </h3>
          <h3
            className="text-right text"
            data-aos="fade-left"
            onClick={() => navigateToSection("/HSCode", "global-map")}
          >
            Global Presence Map
          </h3>
          <h3 className="text-left text" data-aos="fade-right">
            Real-Time Shipment Tracking
          </h3>
          <h3 className="text-right text" data-aos="fade-left">
            Currency & Unit Converter
          </h3>
          <h3 className="text-left text" data-aos="fade-right">
            Trade Analytics Dashboard
          </h3>
          <h3 className="text-right text" data-aos="fade-left">
            Port & Route Analysis
          </h3>
          <h3 className="text-left text" data-aos="fade-right">
            Regulatory News Feed
          </h3>
          <h3 className="text-right text" data-aos="fade-left">
            Multi-Language Support
          </h3>
        </div>
      </div>
    </>
  );
};
