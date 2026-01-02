import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import Mfx from "../../assets/mfx_logo.avif";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 768 && menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      setProductOpen(false); // Close product dropdown when closing menu
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setProductOpen(false);
  };

  const toggleProduct = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setProductOpen(!productOpen);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Products",
      hasDropdown: true,
      dropdown: [
        { name: "Touch Screen Display", path: "/touch-screen-display" },
        { name: "Outdoor LED", path: "/outdoor-led" },
        { name: "Indoor LED", path: "/indoor-led" },
        { name: "AI Kiosks", path: "/ai-kiosks" },
      ],
    },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Dark overlay when menu open on mobile */}
      {menuOpen && (
        <div className="mobile-overlay" onClick={closeMenu}></div>
      )}

      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/" onClick={closeMenu}>
              <img src={Mfx} alt="MFX Logo" />
            </Link>
          </div>

          <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
            {menuItems.map((item) => (
              <li
                key={item.name}
                className={`nav-item ${item.hasDropdown ? "has-dropdown" : ""}`}
              >
                {!item.hasDropdown ? (
                  // Regular menu item
                  <Link to={item.path} onClick={closeMenu}>
                    {item.name}
                  </Link>
                ) : (
                  // Dropdown item - SIMPLIFIED VERSION
                  <>
                    {/* Desktop version */}
                    <div className="dropdown-wrapper">
                      <Link 
                        to="#" 
                        className="dropdown-trigger desktop-only"
                        onClick={(e) => e.preventDefault()}
                      >
                        {item.name}
                        <FaChevronDown className="chevron-icon" />
                      </Link>
                      <ul className="dropdown-menu desktop-only">
                        {item.dropdown.map((sub) => (
                          <li key={sub.name}>
                            <Link to={sub.path} onClick={closeMenu}>
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Mobile version - SIMPLE TOGGLE */}
                    <div className="mobile-dropdown-wrapper mobile-only">
                      <button 
                        className="mobile-dropdown-trigger"
                        onClick={toggleProduct}
                        aria-expanded={productOpen}
                      >
                        <span>{item.name}</span>
                        <FaChevronDown 
                          className={`chevron-mobile ${productOpen ? "rotated" : ""}`} 
                        />
                      </button>
                      
                      {productOpen && (
                        <ul className="mobile-dropdown-content">
                          {item.dropdown.map((sub) => (
                            <li key={sub.name}>
                              <Link to={sub.path} onClick={closeMenu}>
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>

          <div className="menu-toggle" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;