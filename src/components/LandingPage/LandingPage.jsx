import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./LandingPage.css";

function LandingPage() {
  return (
    <section className="landing-container" aria-labelledby="landing-heading">
      <div className="landing-content mfx-container">
        <div className="landing-heading-col">
          <p className="mfx-eyebrow italic-text">Interactivity is Everywhere</p>
          <h1 className="main-heading" id="landing-heading">
            TOUCH SCREEN <span className="highlight">DIGITAL DISPLAYS</span>
          </h1>
        </div>
        <div className="landing-copy-col">
          <p className="normal-text">
            Our range of interactive displays & signages are designed to attract customers and enhance
            brand awareness by providing enriching experiences, access to information, entertainment, and commerce applications.
          </p>
          <p className="normal-text">
            Schedule time to come in for a demo or share your details — we'll get in touch with you!
          </p>
          <div className="button-container">
            <Link className="mfx-btn mfx-btn--primary" to="/contact">
              Schedule a Demo <FaArrowRight aria-hidden="true" />
            </Link>
            <Link className="mfx-btn mfx-btn--outline" to="/touch-screen-display">
              Explore Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
