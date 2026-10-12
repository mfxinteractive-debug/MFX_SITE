import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowRight
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Top decorative border */}
      <div className="footer-top-border" aria-hidden="true"></div>

      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-col footer-brand">
          <p className="footer-brand__name">
            <span className="footer-brand__mark">MFX</span> INTERACTIVE
          </p>
          <p className="brand-tagline">
            Transforming spaces with cutting-edge digital display solutions and interactive experiences.
          </p>
          <div className="footer-social">
            <a href="https://www.facebook.com/mfxinteractive/" className="footer-social__link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebookF aria-hidden="true" />
            </a>
            <a href="https://instagram.com/mfxinteractive/" className="footer-social__link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram aria-hidden="true" />
            </a>
            <a href="https://youtube.com/@multifxinteractive3956?si=cxp17-cPSVnnpwWj" className="footer-social__link" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <FaYoutube aria-hidden="true" />
            </a>
          </div>
          {/* <div className="newsletter">
            <p>Subscribe to our newsletter</p>
            <div className="newsletter-input">
              <input type="email" placeholder="Your email address" />
              <button className="subscribe-btn">
                <FaArrowRight />
              </button>
            </div>
          </div> */}
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h2 className="footer-heading">Quick Links</h2>
          <ul>
            <li>
              <Link to="/">
                <FaArrowRight className="link-arrow" aria-hidden="true" />
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                <FaArrowRight className="link-arrow" aria-hidden="true" />
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services">
                <FaArrowRight className="link-arrow" aria-hidden="true" />
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <FaArrowRight className="link-arrow" aria-hidden="true" />
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Products Links */}
        <div className="footer-col">
          <h2 className="footer-heading">Our Products</h2>
          <ul>
            <li>
              <Link to="/touch-screen-display">
                <FaArrowRight className="link-arrow" aria-hidden="true" />
                Touch Screen Display
              </Link>
            </li>
            <li>
              <Link to="/outdoor-led">
                <FaArrowRight className="link-arrow" aria-hidden="true" />
                Outdoor LED
              </Link>
            </li>
            <li>
              <Link to="/indoor-led">
                <FaArrowRight className="link-arrow" aria-hidden="true" />
                Indoor LED
              </Link>
            </li>
            <li>
              <Link to="/outdoor-digital-displays">
                <FaArrowRight className="link-arrow" aria-hidden="true" />
                Outdoor Displays
              </Link>
            </li>
            <li>
              <Link to="/ai-kiosks">
                <FaArrowRight className="link-arrow" aria-hidden="true" />
                AI Kiosks
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-col footer-contact">
          <h2 className="footer-heading">Get In Touch</h2>
          <div className="contact-item">
            <div className="contact-icon" aria-hidden="true">
              <FaMapMarkerAlt />
            </div>
            <div>
              <p>1, Shakespeare Sarani, 6th Flr, AC Market (Back Gate)</p>
              <p>Kolkata 700017, West Bengal, India</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon" aria-hidden="true">
              <FaEnvelope />
            </div>
            <div>
              <a href="mailto:info@mfxinteractive.com">info@mfxinteractive.com</a>
              <p>Reply within 24 hours</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon" aria-hidden="true">
              <FaPhoneAlt />
            </div>
            <div>
              <a href="tel:+916292004104">+91 6292004104</a>
              <a href="tel:+918697892496">+91 8697892496</a>
              <p>Mon-Fri: 9AM - 6PM</p>
            </div>
          </div>

          <div className="business-hours">
            <h3>Business Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>© {currentYear} MFX Interactive Pvt. Ltd. All Rights Reserved.</p>
          <nav className="footer-legal" aria-label="Legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/service-and-support">Service and Support</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
