import "./Contact.css";
import PixelBlast from "./PixelBlast";
import { useScrollToHash } from "../utils/NavigatePage";
import { useEffect, useState } from "react";

export const Contact = () => {
  useEffect(() => {
    document.body.classList.add("backgroundColor");
    return () => {
      document.body.classList.remove("backgroundColor");
    };
  }, []);
  useScrollToHash();

  // Manage form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Manage UI states
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Reset previous messages and start loading
    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      // 1. Send data directly to your Express backend using fetch
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone }),
      });

      // 2. Check if the server responded with an error (like a 500 status)
      if (!response.ok) {
        // Try to get the specific error message from the backend, or use a default one
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to submit to database");
      }

      // 3. Handle Success
      setSuccessMessage("Form submitted successfully!");

      // Clear out the inputs
      setName("");
      setEmail("");
      setPhone("");
    } catch (err: unknown) {
      // 4. Handle Errors securely
      console.error("Submission error:", err);

      // Check if the error is a standard Error object to safely read its message
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(
          "Failed to submit. Please try again or check your connection.",
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#B19EEF"
          patternScale={2}
          patternDensity={1}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.5}
          edgeFade={0.25}
          transparent
        />
      </div>
      <div id="form">
        <div className="signup-container">
          <form className="signup-form" onSubmit={handleSubmit}>
            <h2>Contact Info</h2>
            <p></p>
            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label>Phone Number</label>
              <input
                type="tel"
                id="phone"
                placeholder="Phone Number"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                minLength={6}
              />
              <small style={{ color: "gray", fontSize: "0.8em" }}>
                (Enter Phone Number with Country Code.)
              </small>
            </div>

            <button type="submit" className="signup-btn" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Submit"}
            </button>
            {successMessage && (
              <p style={{ color: "green", marginTop: "15px" }}>
                {successMessage}
              </p>
            )}
            {error && (
              <p id="error-message" style={{ color: "red", marginTop: "15px" }}>
                {error}
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};
