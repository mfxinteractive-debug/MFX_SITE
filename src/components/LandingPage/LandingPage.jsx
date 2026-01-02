import React from "react";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1 className="main-heading">
          TOUCH SCREEN <span className="highlight">DIGITAL DISPLAYS</span>
        </h1>
        <p className="italic-text">Interactivity is Everywhere</p>
        <p className="normal-text">
          Our range of interactive displays & signages are designed to attract customers and enhance
          brand awareness by providing enriching experiences, access to information, entertainment, and commerce applications.
        </p>
        <p className="normal-text">
          Schedule time to come in for a demo or share your details — we'll get in touch with you!
        </p>
        <div className="button-container">
          <button className="contact-btn">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;