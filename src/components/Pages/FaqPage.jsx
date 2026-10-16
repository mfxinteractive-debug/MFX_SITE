import React from "react";
import { faqs } from "../../content/faqs";
import CtaBlock from "./CtaBlock";
import "./Pages.css";

// The matching FAQPage structured data is added to this route's static HTML
// at build time (see src/seoPages.js), so Google can show these answers.
function FaqPage() {
  return (
    <>
      <section className="pg-hero">
        <div className="pg-hero__inner">
          <p className="mfx-eyebrow">Help</p>
          <h1>Frequently Asked Questions</h1>
          <p>Touch screens, kiosks, LED displays and digital signage from MFX Interactive, Kolkata.</p>
        </div>
      </section>

      <section className="pg-section pg-section--soft">
        <div className="mfx-container">
          <div className="pg-faq">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>{faq.question}</summary>
                <p className="pg-faq__answer">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}

export default FaqPage;
