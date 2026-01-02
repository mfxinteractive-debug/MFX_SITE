import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./TopNav.css";

function TopNav() {
  return (
    <div className="top-nav">
      <div className="top-left">
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <span>+91 9831669989</span>
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <span>info@mfxinteractive.com</span>
        </div>
      </div>

      <div className="top-right">
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="icon-circle">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="icon-circle">
          <FaInstagram />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer" className="icon-circle">
          <FaYoutube />
        </a>
      </div>
    </div>
  );
}

export default TopNav;
