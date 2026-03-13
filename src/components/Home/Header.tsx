
import { useSectionNavigation } from "../utils/NavigatePage";


export const Header = () => {
  const navigateContact = useSectionNavigation();
  return (
    <>
      <section className="hero-section">
        <video 
        autoPlay     // Starts playing automatically
        loop         // Repeats endlessly
        muted        // REQUIRED: Browsers block autoplay if not muted
        playsInline  // REQUIRED: Prevents iOS from opening video in fullscreen
        className="hero-bg-video"
      >
        <source src="Header Resource/hero-section-bgVideo.mp4" type="video/mp4" />
      </video>

        <div className="video-overlay"></div>

        <div className="hero-content">
          <h1
            className="hero-header"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
          >
            Bridging Borders, Powering Global Commerce
          </h1>
          <p className="hero-p" data-aos="zoom-in-up" data-aos-duration="2500">
            Simplify your international trade with a partner who understands the
            nuances of global logistics. From customs clearance to final-mile
            delivery, we provide the infrastructure and expertise you need to
            scale your business across continents with zero friction
          </p>
          <button
            className="hero-btn"
            data-aos="zoom-in-up"
            data-aos-duration="3000"
            onClick={()=> navigateContact("/Contact","")}
          >
            Contact Now
          </button>
        </div>
      </section>
    </>
  );
};
