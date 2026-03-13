

export const Trust = () => {
  return (
    <>
      <div className="trust-section">
        <video autoPlay loop muted playsInline className="trust-bg-video">
          <source src="/Trust Resource/packaging-bg.mp4" type="video/mp4" />
        </video>

        <div className="trust-video-overlay"></div>

        <div className="trust-content">
          <h1
            className="trust-header"
            data-aos="flip-up"
            data-aos-duration="1000"
          >
            Export-Grade Packaging
          </h1>
          <p className="trust-p" data-aos="flip-up" data-aos-duration="1500">
            Ensuring your cargo reaches its destination in pristine condition,
            every time.
          </p>
        </div>
      </div>

      <div className="trust-section">
        <video autoPlay loop muted playsInline className="trust-bg-video">
          <source
            src="/Trust Resource/satisfy-customer-bg.mp4"
            type="video/mp4"
          />
        </video>

        <div className="trust-video-overlay"></div>

        <div className="trust-content">
          <h1
            className="trust-header"
            data-aos="flip-up"
            data-aos-duration="1000"
          >
            Client Success at Scale
          </h1>
          <p className="trust-p" data-aos="flip-up" data-aos-duration="1500">
            Combining global logistics expertise with a customer-first
            philosophy to power your growth.
          </p>
        </div>
      </div>
    </>
  );
};
