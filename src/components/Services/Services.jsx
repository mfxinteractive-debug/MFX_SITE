import React from "react";
import "./Services.css";
import { 
  FaLaptopCode, 
  FaTabletAlt, 
  FaRocket,
  FaPaintBrush,
  FaCheckCircle 
} from "react-icons/fa";

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="multi-services-hero">
        <div className="multi-services-hero-content">
          <h1 className="multi-services-hero-title">
            Our <span className="multi-services-highlight">Services</span>
          </h1>
          <p className="multi-services-hero-subtitle">
            End-to-End Digital Solutions Powered by Innovation & Expertise
          </p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="multi-services-section">
        <div className="multi-services-container">
          {/* Service 1: Web Development */}
          <div className="multi-services-card multi-services-web">
            <div className="multi-services-icon-wrapper">
              <FaLaptopCode className="multi-services-icon" aria-hidden="true" />
            </div>
            <h2>Web & Software Development</h2>
            <p className="multi-services-tagline">Custom Websites • Web Apps • Enterprise Software</p>
            <p>
              We build fast, secure, and scalable digital solutions tailored to your business goals. 
              From stunning corporate websites to complex web applications and custom software — 
              we deliver pixel-perfect frontend and robust backend systems.
            </p>

            <div className="multi-services-features">
              <h3 className="multi-services-features-title"><FaRocket aria-hidden="true" /> What We Deliver:</h3>
              <ul>
                <li><FaCheckCircle aria-hidden="true" /> Modern Frontend (React, Vue, Next.js)</li>
                <li><FaCheckCircle aria-hidden="true" /> Powerful Backend (Node.js, Python, Laravel)</li>
                <li><FaCheckCircle aria-hidden="true" /> Cloud & Database Architecture</li>
                <li><FaCheckCircle aria-hidden="true" /> API Development & Third-Party Integrations</li>
                <li><FaCheckCircle aria-hidden="true" /> Ongoing Maintenance & Updates</li>
              </ul>
            </div>

            {/* <div className="multi-services-tag">Full-Stack Expertise</div> */}
          </div>

          {/* Service 2: Interactive Content */}
          <div className="multi-services-card multi-services-interactive">
            <div className="multi-services-icon-wrapper">
              <FaTabletAlt className="multi-services-icon" aria-hidden="true" />
            </div>
            <h2>Touch Interactive Content Development</h2>
            <p className="multi-services-tagline">Engaging Experiences for Interactive Displays</p>
            <p>
              Why go elsewhere? At <span className="multi-services-brand">MULTIFX</span>, we don’t just sell interactive displays — 
              we <strong>create the magic that runs on them</strong>. Our in-house creative & development team 
              designs immersive, intuitive, and visually captivating touch content.
            </p>

            <div className="multi-services-features">
              <h3 className="multi-services-features-title"><FaPaintBrush aria-hidden="true" /> Perfect For:</h3>
              <ul>
                <li><FaCheckCircle aria-hidden="true" /> Education (Interactive Learning Apps)</li>
                <li><FaCheckCircle aria-hidden="true" /> Corporate (Digital Signage & Presentations)</li>
                <li><FaCheckCircle aria-hidden="true" /> Retail (Product Explorers & Wayfinding)</li>
                <li><FaCheckCircle aria-hidden="true" /> Museums & Exhibitions</li>
                <li><FaCheckCircle aria-hidden="true" /> Custom Games & Simulations</li>
              </ul>
            </div>

            {/* <div className="multi-services-tag">One-Stop Interactive Solution</div> */}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="multi-services-cta">
        <div className="multi-services-container">
          <h2>Ready to Transform Your Digital Presence?</h2>
          <p>
            Whether you need a powerful website, custom software, or jaw-dropping interactive content — 
            <strong>MULTIFX delivers excellence at every touchpoint</strong>.
          </p>
          <button className="multi-services-cta-button">Start Your Project Today</button>
        </div>
      </section> */}
    </>
  );
};

export default Services;