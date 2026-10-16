import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { business } from "../../content/business";

function CtaBlock() {
  return (
    <section className="pg-section">
      <div className="mfx-container">
        <div className="pg-cta">
          <h2>Planning a touch screen or digital signage project?</h2>
          <p>Tell us what you need and we&apos;ll recommend the right display, with a quotation and a demo at our Kolkata office.</p>
          <div className="pg-hero__actions">
            <Link className="mfx-btn mfx-btn--primary" to="/contact">
              Get a Quote <FaArrowRight aria-hidden="true" />
            </Link>
            <a className="mfx-btn mfx-btn--outline-light" href={business.phoneHref}>
              <FaPhoneAlt aria-hidden="true" /> {business.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaBlock;
