import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import "./SocialIcons.css";

const SocialIcons = () => {
  const [showIcons, setShowIcons] = useState(true);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowIcons(false); // hide when scrolling down
      } else {
        setShowIcons(true); // show when scrolling up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`social-container ${showIcons ? "show" : "hide"}`}>
      <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon fb">
        <FaFacebookF />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon insta">
        <FaInstagram />
      </a>
      <a href="https://wa.me/916292004104" target="_blank" rel="noreferrer" className="social-icon wa">
        <FaWhatsapp />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon yt">
        <FaYoutube />
      </a>
    </div>
  );
};

export default SocialIcons;
