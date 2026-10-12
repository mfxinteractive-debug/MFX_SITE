import React from 'react';
import './AboutUs.css';
import ContactPage from '../Contact/Contacts';
import { FaRocket, FaUsers, FaAward, FaHeadset } from 'react-icons/fa';
import installationPhoto from '../../assets/Installations/itc_sonar.jpeg';

function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay">
          <h1 className="hero-title">We Are <span className="about-brand">MULTIFX</span></h1>
          <p className='taazatv-text'>From the House of TAAZATV</p>
          <p className="hero-subtitle">Pioneering the Future of Interactive Display Technology</p>
        </div>
      </section>

      {/* Main About Content */}
      <section className="about-main">
        <div className="about-container">
          {/* Our Story */}
          <div className="story-section">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded with a vision to revolutionize how people interact with digital content, <strong>MULTIFX</strong> has grown from a passionate startup into a trusted leader in premium interactive displays.
              </p>
              <p>
                With over <strong>12 years of expertise</strong> in touchscreen technology, AV integration, and creative digital solutions, we’ve empowered schools, corporations, museums, and retail brands worldwide to engage their audiences like never before.
              </p>
              <p>
                Whether you're transforming a classroom, commanding attention in a boardroom, or creating unforgettable retail experiences — we deliver cutting-edge technology backed by world-class support.
              </p>
            </div>
            <div className="story-image">
              <figure className="image-placeholder">
                <img
                  src={installationPhoto}
                  alt="MULTIFX interactive display installed at ITC Sonar Bengal"
                  width="1280"
                  height="720"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>Interactive Display in Action</figcaption>
              </figure>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="mission-vision-grid">
            <div className="about-card mission">
              <FaRocket className="about-card__icon" aria-hidden="true" />
              <h3>Our Mission</h3>
              <p>To make interactive technology accessible, reliable, and inspiring — enabling creativity, collaboration, and connection in every environment.</p>
            </div>
            <div className="about-card vision">
              <FaAward className="about-card__icon" aria-hidden="true" />
              <h3>Our Vision</h3>
              <p>To be the global benchmark for innovation and excellence in interactive display solutions.</p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="why-choose-us">
            <h2 className="about-section-title">Why Choose MULTIFX?</h2>
            <div className="features-grid">
              <div className="feature-item">
                <FaHeadset className="about-feature-icon" aria-hidden="true" />
                <h3>24/7 Expert Support</h3>
                <p>Real people, real solutions — anytime you need us.</p>
              </div>
              <div className="feature-item">
                <FaAward className="about-feature-icon" aria-hidden="true" />
                <h3>Premium Quality Guaranteed</h3>
                <p>Every product rigorously tested for durability and performance.</p>
              </div>
              <div className="feature-item">
                <FaUsers className="about-feature-icon" aria-hidden="true" />
                <h3>Trusted by Industry Leaders</h3>
                <p>From Fortune top universities — they choose MULTIFX.</p>
              </div>
              <div className="feature-item">
                <FaRocket className="about-feature-icon" aria-hidden="true" />
                <h3>Fast Delivery & Installation</h3>
                <p>Nationwide coverage with professional setup available.</p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="values-section">
            <h2 className="about-section-title">Our Core Values</h2>
            <ul className="values-list">
              <li><strong>Innovation:</strong> Always pushing the boundaries of what's possible</li>
              <li><strong>Integrity:</strong> Honest pricing, transparent communication</li>
              <li><strong>Excellence:</strong> We don’t settle for good — we deliver exceptional</li>
              <li><strong>Customer First:</strong> Your success is our success</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactPage titleAs="h2" />
    </>
  );
}

export default About;