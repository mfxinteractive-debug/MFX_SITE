import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import itcSonar from "../../assets/Installations/itc_sonar.jpeg";
import itcRoyal from "../../assets/Installations/ITC_Royal.avif";
import springClub from "../../assets/Installations/SpringClub.jpeg";
import tutopia from "../../assets/Installations/Tutopia.avif";
import merlin from "../../assets/Installations/Merlin.avif";
import naturals from "../../assets/Installations/Naturals_Group.avif";
import CtaBlock from "./CtaBlock";
import "./Pages.css";

// Each description states only what the installation photo shows.
// Add project details (date, quantity, outcome) here as clients approve them.
const cases = [
  {
    client: "ITC Sonar, Kolkata",
    product: "Digital standee",
    text: "A floor-standing digital standee on castors in the hotel's corridor, branded for ITC Sonar and running the hotel's event promotions for guests.",
    image: itcSonar,
    width: 1280,
    height: 720,
    to: "/touch-screen-display",
  },
  {
    client: "ITC Royal Bengal, Kolkata",
    product: "Digital standee",
    text: "A slim vertical digital display in the hotel, showing a welcome screen for a corporate \"New Manager Program\" event.",
    image: itcRoyal,
    width: 900,
    height: 491,
    to: "/touch-screen-display",
  },
  {
    client: "The Spring Club",
    product: "Digital standee",
    text: "A digital standee in the club's lobby promoting club events and inviting members to get in touch.",
    image: springClub,
    width: 1600,
    height: 1200,
    to: "/touch-screen-display",
  },
  {
    client: "Tutopia",
    product: "Digital standee at an event",
    text: "A branded vertical digital display at Tutopia's exhibition stall, drawing visitors in alongside the stand's graphics and LED screen.",
    image: tutopia,
    width: 940,
    height: 513,
    to: "/touch-screen-display",
  },
  {
    client: "Merlin",
    product: "Interactive touch kiosk",
    text: "An angled interactive touch screen on a sculpted white stand, installed in a glass-walled lounge.",
    image: merlin,
    width: 940,
    height: 513,
    to: "/touch-screen-display",
  },
  {
    client: "Natural Group",
    product: "Interactive touch table",
    text: "An interactive touch coffee table in a lounge, letting visitors explore content right where they sit.",
    image: naturals,
    width: 940,
    height: 513,
    to: "/touch-screen-display",
  },
];

function OurWork() {
  return (
    <>
      <section className="pg-hero">
        <div className="pg-hero__inner">
          <p className="mfx-eyebrow">Case studies</p>
          <h1>Our Work</h1>
          <p>
            Digital standees, touch kiosks and interactive tables we have installed for hotels, clubs, education
            brands and corporates in Kolkata and beyond.
          </p>
        </div>
      </section>

      <section className="pg-section pg-section--soft">
        <div className="mfx-container">
          <div className="pg-cases">
            {cases.map((item) => (
              <article key={item.client} className="pg-case">
                <img
                  src={item.image}
                  alt={`${item.product} installed by MFX Interactive at ${item.client}`}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  decoding="async"
                />
                <div className="pg-case__body">
                  <span className="pg-case__tag">{item.product}</span>
                  <h2>{item.client}</h2>
                  <p>{item.text}</p>
                  <Link className="pg-card__link" to={item.to}>
                    View similar products <FaArrowRight aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}

export default OurWork;
