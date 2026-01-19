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
              <FaLaptopCode className="multi-services-icon" />
            </div>
            <h2>Web & Software Development</h2>
            <h4>Custom Websites • Web Apps • Enterprise Software</h4>
            <p>
              We build fast, secure, and scalable digital solutions tailored to your business goals. 
              From stunning corporate websites to complex web applications and custom software — 
              we deliver pixel-perfect frontend and robust backend systems.
            </p>

            <div className="multi-services-features">
              <h5><FaRocket /> What We Deliver:</h5>
              <ul>
                <li><FaCheckCircle /> Modern Frontend (React, Vue, Next.js)</li>
                <li><FaCheckCircle /> Powerful Backend (Node.js, Python, Laravel)</li>
                <li><FaCheckCircle /> Cloud & Database Architecture</li>
                <li><FaCheckCircle /> API Development & Third-Party Integrations</li>
                <li><FaCheckCircle /> Ongoing Maintenance & Updates</li>
              </ul>
            </div>

            {/* <div className="multi-services-tag">Full-Stack Expertise</div> */}
          </div>

          {/* Service 2: Interactive Content */}
          <div className="multi-services-card multi-services-interactive">
            <div className="multi-services-icon-wrapper">
              <FaTabletAlt className="multi-services-icon" />
            </div>
            <h2>Touch Interactive Content Development</h2>
            <h4>Engaging Experiences for Interactive Displays</h4>
            <p>
              Why go elsewhere? At <span className="multi-services-brand">MULTIFX</span>, we don’t just sell interactive displays — 
              we <strong>create the magic that runs on them</strong>. Our in-house creative & development team 
              designs immersive, intuitive, and visually captivating touch content.
            </p>

            <div className="multi-services-features">
              <h5><FaPaintBrush /> Perfect For:</h5>
              <ul>
                <li><FaCheckCircle /> Education (Interactive Learning Apps)</li>
                <li><FaCheckCircle /> Corporate (Digital Signage & Presentations)</li>
                <li><FaCheckCircle /> Retail (Product Explorers & Wayfinding)</li>
                <li><FaCheckCircle /> Museums & Exhibitions</li>
                <li><FaCheckCircle /> Custom Games & Simulations</li>
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