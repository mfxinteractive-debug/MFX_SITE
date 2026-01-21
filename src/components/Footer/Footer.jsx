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
      <div className="footer-top-border"></div>
      
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-col footer-brand">
          <h2>
            <span className="brand-highlight">MFX</span> INTERACTIVE
          </h2>
          <p className="brand-tagline">
            Transforming spaces with cutting-edge digital display solutions and interactive experiences.
          </p>
          <div className="social-icons">
            <a href="https://facebook.com" className="social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" className="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://youtube.com" className="social-icon" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
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
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">
                <FaArrowRight className="link-arrow" />
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                <FaArrowRight className="link-arrow" />
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services">
                <FaArrowRight className="link-arrow" />
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <FaArrowRight className="link-arrow" />
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Products Links */}
        <div className="footer-col">
          <h3>Our Products</h3>
          <ul>
            <li>
              <Link to="/touch-screens">
                <FaArrowRight className="link-arrow" />
                Touch Screen Display
              </Link>
            </li>
            <li>
              <Link to="/outdoor-led">
                <FaArrowRight className="link-arrow" />
                Outdoor LED
              </Link>
            </li>
            <li>
              <Link to="/indoor-led">
                <FaArrowRight className="link-arrow" />
                Indoor LED
              </Link>
            </li>
            <li>
              <Link to="/ai-kiosk">
                <FaArrowRight className="link-arrow" />
                AI Kiosks
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-col footer-contact">
          <h3>Get In Touch</h3>
          <div className="contact-item">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>
            <div>
              <p>37, Shakespeare Sarani</p>
              <p>Kolkata 700017, West Bengal, India</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <div>
              <a href="mailto:info@mfxinteractive.com">info@mfxinteractive.com</a>
              <p>Reply within 24 hours</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <FaPhoneAlt />
            </div>
            <div>
              <a href="tel:+916292004104">+91 6292004104</a>
              <p>Mon-Fri: 9AM - 6PM</p>
            </div>
          </div>
          
          <div className="business-hours">
            <h4>Business Hours</h4>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>
            © {currentYear} MFX Interactive Pvt. Ltd. All Rights Reserved.
            <span className="separator">|</span>
            <Link to="/privacy">Privacy Policy</Link>
            <span className="separator">|</span>
            <Link to="/terms">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;