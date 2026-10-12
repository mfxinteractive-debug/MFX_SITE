import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaArrowRight,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import Mfx from "../../assets/mfx_logo.avif";
import useFocusTrap from "../../hooks/useFocusTrap";
import "./Navbar.css";

const productLinks = [
  { name: "Touch Screen Display", path: "/touch-screen-display" },
  { name: "Indoor LED", path: "/indoor-led" },
  { name: "Outdoor LED", path: "/outdoor-led" },
  { name: "Outdoor Displays", path: "/outdoor-digital-displays" },
  { name: "AI Kiosks", path: "/ai-kiosks" },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/mfxinteractive/", icon: <FaFacebookF /> },
  { label: "Instagram", href: "https://instagram.com/mfxinteractive/", icon: <FaInstagram /> },
  { label: "WhatsApp", href: "https://wa.me/916292004104", icon: <FaWhatsapp /> },
  { label: "YouTube", href: "https://youtube.com/@multifxinteractive3956?si=cxp17-cPSVnnpwWj", icon: <FaYoutube /> },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const { pathname } = useLocation();

  const menuButtonRef = useRef(null);
  const drawerRef = useRef(null);
  const productsRef = useRef(null);
  const productsButtonRef = useRef(null);
  const hoverTimer = useRef(null);

  const isProductRoute = productLinks.some((item) => item.path === pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close every menu after navigating.
  useEffect(() => {
    setMenuOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  // Close the drawer if the viewport grows into the desktop layout.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 900px)");
    const handleChange = (event) => event.matches && setMenuOpen(false);
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  useFocusTrap(drawerRef, menuOpen, closeMenu, menuButtonRef);

  // Desktop products menu: close on outside click and on Escape.
  useEffect(() => {
    if (!productsOpen) return undefined;

    const handlePointer = (event) => {
      if (!productsRef.current?.contains(event.target)) setProductsOpen(false);
    };
    const handleKey = (event) => {
      if (event.key === "Escape") {
        setProductsOpen(false);
        productsButtonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("pointerdown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [productsOpen]);

  useEffect(() => () => clearTimeout(hoverTimer.current), []);

  const openProductsOnHover = () => {
    clearTimeout(hoverTimer.current);
    setProductsOpen(true);
  };

  const closeProductsOnHover = () => {
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setProductsOpen(false), 160);
  };

  const handleProductsBlur = (event) => {
    if (!productsRef.current?.contains(event.relatedTarget)) setProductsOpen(false);
  };

  const navClass = ({ isActive }) => `nav-link${isActive ? " is-active" : ""}`;

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="site-header__inner">
          <Link to="/" className="site-header__logo" aria-label="MULTIFX home">
            <img src={Mfx} alt="MULTIFX" width="96" height="96" />
          </Link>

          <nav className="desktop-nav" aria-label="Primary">
            <ul className="desktop-nav__list">
              <li>
                <NavLink to="/" end className={navClass}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={navClass}>
                  About
                </NavLink>
              </li>
              <li
                ref={productsRef}
                className="desktop-nav__dropdown"
                onMouseEnter={openProductsOnHover}
                onMouseLeave={closeProductsOnHover}
                onBlur={handleProductsBlur}
              >
                <button
                  ref={productsButtonRef}
                  type="button"
                  className={`nav-link nav-link--button${isProductRoute ? " is-active" : ""}`}
                  aria-expanded={productsOpen}
                  aria-controls="products-menu"
                  // Keyboard activation toggles; pointer clicks keep a hover-opened menu open.
                  onClick={(event) => setProductsOpen((open) => (event.detail === 0 ? !open : true))}
                >
                  Products
                  <FaChevronDown className="nav-link__chevron" aria-hidden="true" />
                </button>
                <ul
                  id="products-menu"
                  className={`products-menu${productsOpen ? " is-open" : ""}`}
                >
                  {productLinks.map((item) => (
                    <li key={item.path}>
                      <NavLink
                        to={item.path}
                        className={({ isActive }) => `products-menu__link${isActive ? " is-active" : ""}`}
                        tabIndex={productsOpen ? 0 : -1}
                      >
                        {item.name}
                        <FaArrowRight aria-hidden="true" />
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <NavLink to="/services" className={navClass}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={navClass}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <Link to="/contact" className="mfx-btn mfx-btn--primary site-header__cta">
            Get a Quote
          </Link>

          <button
            ref={menuButtonRef}
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
          >
            <FaBars aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* Mobile drawer lives outside the blurred header so it is truly viewport-fixed. */}
      <div className={`mobile-nav${menuOpen ? " is-open" : ""}`}>
        <div className="mobile-nav__backdrop" onClick={closeMenu} aria-hidden="true" />
        <div
          ref={drawerRef}
          id="mobile-navigation"
          className="mobile-nav__panel"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          tabIndex={-1}
        >
          <div className="mobile-nav__head">
            <Link to="/" className="site-header__logo" aria-label="MULTIFX home">
              <img src={Mfx} alt="MULTIFX" width="96" height="96" />
            </Link>
            <button type="button" className="menu-toggle menu-toggle--close" onClick={closeMenu} aria-label="Close navigation menu">
              <FaTimes aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile" className="mobile-nav__body">
            <ul className="mobile-nav__list">
              <li>
                <NavLink to="/" end className="mobile-nav__link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="mobile-nav__link">
                  About
                </NavLink>
              </li>
              <li>
                <button
                  type="button"
                  className={`mobile-nav__link mobile-nav__toggle${isProductRoute ? " is-active" : ""}`}
                  aria-expanded={mobileProductOpen}
                  aria-controls="mobile-products"
                  onClick={() => setMobileProductOpen((open) => !open)}
                >
                  Products
                  <FaChevronDown className="mobile-nav__chevron" aria-hidden="true" />
                </button>
                <ul id="mobile-products" className="mobile-nav__sub" hidden={!mobileProductOpen}>
                  {productLinks.map((item) => (
                    <li key={item.path}>
                      <NavLink to={item.path} className="mobile-nav__sublink">
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <NavLink to="/services" className="mobile-nav__link">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="mobile-nav__link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="mobile-nav__foot">
            <Link to="/contact" className="mfx-btn mfx-btn--primary mobile-nav__cta">
              Get a Quote <FaArrowRight aria-hidden="true" />
            </Link>
            <a className="mobile-nav__contact" href="tel:+916292004104">
              <FaPhoneAlt aria-hidden="true" /> +91 6292004104
            </a>
            <a className="mobile-nav__contact" href="mailto:info@mfxinteractive.com">
              <FaEnvelope aria-hidden="true" /> info@mfxinteractive.com
            </a>
            <div className="mobile-nav__social">
              {socialLinks.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
