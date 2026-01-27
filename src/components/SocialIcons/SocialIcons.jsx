import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import "./SocialIcons.css";

const SocialIcons = () => {
  const [showIcons, setShowIcons] = useState(true);
  const location = useLocation();
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // Check if we're on home page
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      lastScrollY.current = window.scrollY;
      
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          // Hide when scrolling down, show when at top
          setShowIcons(lastScrollY.current <= 100);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    if (isHomePage) {
      window.addEventListener("scroll", handleScroll);
      setShowIcons(true); // Show initially on home page
    } else {
      setShowIcons(false); // Hide on other pages
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  // Don't render at all if not home page
  if (!isHomePage) {
    return null;
  }

  return (
    <div className={`social-icons-container ${showIcons ? "social-show" : "social-hide"}`}>
      <a 
        href="https://www.facebook.com/mfxinteractive/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-icon social-fb"
        aria-label="Facebook"
      >
        <FaFacebookF />
      </a>
      <a 
        href="https://instagram.com/mfxinteractive/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-icon social-insta"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
      <a 
        href="https://wa.me/916292004104" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-icon social-wa"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>
      <a 
        href="https://youtube.com/@multifxinteractive3956?si=cxp17-cPSVnnpwWj" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-icon social-yt"
        aria-label="YouTube"
      >
        <FaYoutube />
      </a>
    </div>
  );
};

export default SocialIcons;