import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaTools,
  FaShieldAlt,
  FaHeadset,
  FaCode,
  FaBoxOpen,
} from "react-icons/fa";
import { business } from "../../content/business";
import { faqs } from "../../content/faqs";
import CtaBlock from "./CtaBlock";
import "./Pages.css";

// Real product range (from src/data/*.json) with the page that covers it.
const products = [
  { name: "Touch Screen Standees", sizes: "21.5\" – 75\"", text: "Freestanding interactive displays for lobbies, showrooms, exhibitions and events.", to: "/touch-screen-display" },
  { name: "Touch Kiosks", sizes: "21.5\" – 55\"", text: "Self-service kiosks for mall wayfinding, hotel check-in and hospital registration.", to: "/touch-screen-display" },
  { name: "Interactive Flat Panels", sizes: "65\", 75\", 86\"", text: "Multi-touch panels with a digital whiteboard for classrooms and boardrooms.", to: "/touch-screen-display" },
  { name: "Interactive Touch Tables", sizes: "55\"", text: "Touch tables for retail experiences, museum exhibits and team collaboration.", to: "/touch-screen-display" },
  { name: "Wall-Mount Touch Displays", sizes: "32\" – 85\"", text: "Wall-mounted touch screens for conference rooms, lobbies and control centres.", to: "/touch-screen-display" },
  { name: "Indoor LED Walls", sizes: "P2.5 fine pitch", text: "High-resolution LED video walls for boardrooms, studios and retail stores.", to: "/indoor-led" },
  { name: "Outdoor LED Screens", sizes: "P10, weatherproof", text: "High-brightness LED screens for outdoor advertising, stadiums and façades.", to: "/outdoor-led" },
  { name: "Outdoor Digital Displays", sizes: "55\" professional", text: "Weatherproof digital signage for advertising and public information.", to: "/outdoor-digital-displays" },
  { name: "AI Kiosks", sizes: "32\" touch", text: "Smart retail kiosks with facial recognition, voice assistant and analytics.", to: "/ai-kiosks" },
];

// Client names as shown in the site's client logo section.
const clients = [
  "ITC Hotels", "ITC Sonar", "ITC Royal Bengal", "Ambuja Neotia", "Radisson", "Tata Tiscon",
  "GRSE", "JIS Group", "Merlin Group", "Birla High School", "Susila Birla",
  "Hindustan Club", "Camac Club", "The Spring Club", "Tutopia", "Melorra", "Merino",
  "Metro Group", "Sembcorp", "Siti Network",
];

const reasons = [
  { icon: <FaMapMarkerAlt />, title: "Local Kolkata office", text: "Visit our office at AC Market, Shakespeare Sarani, for demos and consultations." },
  { icon: <FaTools />, title: "Delivery & installation", text: "Professional setup with nationwide coverage, so your display arrives ready to use." },
  { icon: <FaShieldAlt />, title: "12–24 month warranty", text: "12 months standard from shipment, up to 24 months on designated models." },
  { icon: <FaHeadset />, title: "Fast support", text: "24/7 online support: replies within 4 hours on working days, 12 hours on weekends." },
  { icon: <FaCode />, title: "In-house content team", text: "We build the interactive apps, signage and games that run on your screens." },
  { icon: <FaBoxOpen />, title: "No minimum order", text: "Order a single display or a full rollout; samples available for testing." },
];

function KolkataPage() {
  return (
    <>
      <section className="pg-hero">
        <div className="pg-hero__inner">
          <p className="mfx-eyebrow">Kolkata · West Bengal</p>
          <h1>Touch Screen Display Supplier in Kolkata</h1>
          <p>
            {business.name} ({business.brand}), from the house of TAAZATV, supplies interactive touch screens,
            touch kiosks, digital standees, interactive flat panels, LED walls and AI kiosks to hotels, schools,
            retailers and corporates across Kolkata and West Bengal, with installation and local support.
          </p>
          <div className="pg-hero__actions">
            <Link className="mfx-btn mfx-btn--primary" to="/contact">
              Get a Quote <FaArrowRight aria-hidden="true" />
            </Link>
            <a className="mfx-btn mfx-btn--outline-light" href={business.phoneHref}>
              <FaPhoneAlt aria-hidden="true" /> {business.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="pg-section">
        <div className="mfx-container">
          <div className="pg-prose">
            <p>
              Looking for a reliable <strong>touch screen company in Kolkata</strong>? For more than a decade,
              MULTIFX has designed and supplied interactive display technology for businesses that want to engage
              customers, students and visitors. From a single digital standee for a hotel lobby to a full LED video
              wall, we handle product selection, delivery, installation, content and after-sales support from our
              office in central Kolkata.
            </p>
            <p>
              Our displays are installed at some of Kolkata&apos;s best-known venues, including <strong>ITC Sonar</strong>,{" "}
              <strong>ITC Royal Bengal</strong> and <strong>The Spring Club</strong>.
            </p>
          </div>
        </div>
      </section>

      <section className="pg-section pg-section--soft" aria-labelledby="kol-products">
        <div className="mfx-container">
          <div className="pg-section__head">
            <h2 id="kol-products">What we supply in Kolkata</h2>
            <p>Touch screens and digital signage in every common size, with Android or Windows.</p>
          </div>
          <div className="pg-grid pg-grid--3">
            {products.map((product) => (
              <Link key={product.name} className="pg-card" to={product.to}>
                <h3>{product.name}</h3>
                <p className="pg-card__meta">{product.sizes}</p>
                <p>{product.text}</p>
                <span className="pg-card__link">
                  View range <FaArrowRight aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pg-section" aria-labelledby="kol-why">
        <div className="mfx-container">
          <div className="pg-section__head">
            <h2 id="kol-why">Why Kolkata businesses choose MFX Interactive</h2>
          </div>
          <div className="pg-grid pg-grid--3">
            {reasons.map((reason) => (
              <div key={reason.title} className="pg-card">
                <span className="pg-card__icon" aria-hidden="true">{reason.icon}</span>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pg-section pg-section--soft" aria-labelledby="kol-clients">
        <div className="mfx-container">
          <div className="pg-section__head">
            <h2 id="kol-clients">Trusted by Kolkata brands</h2>
            <p>Hotels, schools, clubs, retailers and corporates we have supplied.</p>
          </div>
          <ul className="pg-clients">
            {clients.map((client) => (
              <li key={client}>{client}</li>
            ))}
          </ul>
          <div className="pg-center">
            <Link className="mfx-btn mfx-btn--outline" to="/our-work">
              See our installations <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="pg-section" aria-labelledby="kol-visit">
        <div className="mfx-container">
          <div className="pg-section__head">
            <h2 id="kol-visit">Visit our Kolkata office</h2>
          </div>
          <div className="pg-visit">
            <div className="pg-card">
              <h3>{business.legalName}</h3>
              <p>
                {business.addressLines[0]}
                <br />
                {business.addressLines[1]}
              </p>
              <p style={{ marginTop: 12 }}>
                <a href={business.phoneHref}>{business.phone}</a> · <a href={business.altPhoneHref}>{business.altPhone}</a>
                <br />
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </p>
              <a className="pg-card__link" href={business.mapUrl} target="_blank" rel="noopener noreferrer">
                Open in Google Maps <FaArrowRight aria-hidden="true" />
              </a>
            </div>
            <div className="pg-card">
              <h3>Business hours</h3>
              <div className="pg-hours">
                {business.hours.map((row) => (
                  <div key={row.days}>
                    <span>{row.days}</span>
                    <span>{row.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pg-section pg-section--soft" aria-labelledby="kol-faq">
        <div className="mfx-container">
          <div className="pg-section__head">
            <h2 id="kol-faq">Common questions</h2>
          </div>
          <div className="pg-faq">
            {faqs.slice(0, 5).map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p className="pg-faq__answer">{faq.answer}</p>
              </details>
            ))}
          </div>
          <div className="pg-center">
            <Link className="mfx-btn mfx-btn--outline" to="/faq">
              All questions <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}

export default KolkataPage;
