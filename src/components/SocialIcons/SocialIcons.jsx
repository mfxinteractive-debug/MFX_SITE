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
      window.addEventListener("scroll", handleScroll, { passive: true });
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
    <div className={`float-social ${showIcons ? "is-visible" : ""}`} aria-hidden={!showIcons}>
      <a 
        href="https://www.facebook.com/mfxinteractive/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="float-social__link float-social__link--fb"
        aria-label="Facebook"
        tabIndex={showIcons ? undefined : -1}
      >
        <FaFacebookF aria-hidden="true" />
      </a>
      <a 
        href="https://instagram.com/mfxinteractive/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="float-social__link float-social__link--insta"
        aria-label="Instagram"
        tabIndex={showIcons ? undefined : -1}
      >
        <FaInstagram aria-hidden="true" />
      </a>
      <a 
        href="https://wa.me/916292004104" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="float-social__link float-social__link--wa"
        aria-label="WhatsApp"
        tabIndex={showIcons ? undefined : -1}
      >
        <FaWhatsapp aria-hidden="true" />
      </a>
      <a 
        href="https://youtube.com/@multifxinteractive3956?si=cxp17-cPSVnnpwWj" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="float-social__link float-social__link--yt"
        aria-label="YouTube"
        tabIndex={showIcons ? undefined : -1}
      >
        <FaYoutube aria-hidden="true" />
      </a>
    </div>
  );
};

export default SocialIcons;