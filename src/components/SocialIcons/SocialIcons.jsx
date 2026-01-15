import React, { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import "./SocialIcons.css";

const SocialIcons = () => {
  const [showIcons, setShowIcons] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      lastScrollY.current = window.scrollY;
      
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setShowIcons(lastScrollY.current <= 100);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`social-icons-container ${showIcons ? "social-show" : "social-hide"}`}>
      <a 
        href="https://facebook.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-icon social-fb"
      >
        <FaFacebookF />
      </a>
      <a 
        href="https://instagram.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-icon social-insta"
      >
        <FaInstagram />
      </a>
      <a 
        href="https://wa.me/916292004104" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-icon social-wa"
      >
        <FaWhatsapp />
      </a>
      <a 
        href="https://youtube.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-icon social-yt"
      >
        <FaYoutube />
      </a>
    </div>
  );
};

export default SocialIcons;