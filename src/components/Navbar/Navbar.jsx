import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Mfx from "../../assets/mfx_logo.avif";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [ledOpen, setLedOpen] = useState(false);
  
  // For desktop LED hover
  const [desktopLedOpen, setDesktopLedOpen] = useState(false);

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
    if (!menuOpen) {
      setMobileProductOpen(false);
      setLedOpen(false);
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileProductOpen(false);
    setLedOpen(false);
  };

  const toggleMobileProduct = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileProductOpen(!mobileProductOpen);
    if (mobileProductOpen) {
      setLedOpen(false);
    }
  };

  const toggleMobileLed = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setLedOpen(!ledOpen);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Products",
      hasDropdown: true,
      dropdown: [
        { name: "Touch Screen Display", path: "/touch-screen-display" },
        {
          name: "LED",
          hasSubDropdown: true,
          subDropdown: [
            { name: "Indoor LED", path: "/indoor-led" },
            { name: "Outdoor LED", path: "/outdoor-led" },
          ],
        },
        {name:"Outdoor Displays",path:"outdoor-digital-displays"},
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
                  // Dropdown item
                  <>
                    {/* Desktop version */}
                    <div 
                      className="dropdown-wrapper desktop-only"
                      onMouseEnter={() => setDesktopLedOpen(true)}
                      onMouseLeave={() => setDesktopLedOpen(false)}
                    >
                      <Link 
                        to="#" 
                        className="dropdown-trigger"
                        onClick={(e) => e.preventDefault()}
                      >
                        {item.name}
                        <FaChevronDown className="chevron-icon" />
                      </Link>
                      <ul className="dropdown-menu">
                        {item.dropdown.map((sub) => (
                          <li 
                            key={sub.name}
                            className={sub.hasSubDropdown ? "has-nested-dropdown" : ""}
                            onMouseEnter={() => sub.hasSubDropdown && setDesktopLedOpen(true)}
                            onMouseLeave={() => sub.hasSubDropdown && setDesktopLedOpen(false)}
                          >
                            {!sub.hasSubDropdown ? (
                              <Link to={sub.path} onClick={closeMenu}>
                                {sub.name}
                              </Link>
                            ) : (
                              <>
                                <span className="nested-trigger">
                                  {sub.name}
                                  <FaChevronRight className="nested-chevron" />
                                </span>
                                {desktopLedOpen && (
                                  <ul className="nested-dropdown-menu">
                                    {sub.subDropdown.map((nested) => (
                                      <li key={nested.name}>
                                        <Link to={nested.path} onClick={closeMenu}>
                                          {nested.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Mobile version */}
                    <div className="mobile-dropdown-wrapper mobile-only">
                      <button 
                        className="mobile-dropdown-trigger"
                        onClick={toggleMobileProduct}
                        aria-expanded={mobileProductOpen}
                      >
                        <span>{item.name}</span>
                        <FaChevronDown 
                          className={`chevron-mobile ${mobileProductOpen ? "rotated" : ""}`} 
                        />
                      </button>
                      
                      {mobileProductOpen && (
                        <ul className="mobile-dropdown-content">
                          {item.dropdown.map((sub) => (
                            <li key={sub.name} className={sub.hasSubDropdown ? "has-nested-mobile" : ""}>
                              {!sub.hasSubDropdown ? (
                                <Link to={sub.path} onClick={closeMenu}>
                                  {sub.name}
                                </Link>
                              ) : (
                                <>
                                  <button 
                                    className="mobile-nested-trigger"
                                    onClick={toggleMobileLed}
                                  >
                                    <span>{sub.name}</span>
                                    <FaChevronDown 
                                      className={`nested-chevron-mobile ${ledOpen ? "rotated" : ""}`} 
                                    />
                                  </button>
                                  {ledOpen && (
                                    <ul className="mobile-nested-dropdown">
                                      {sub.subDropdown.map((nested) => (
                                        <li key={nested.name}>
                                          <Link to={nested.path} onClick={closeMenu}>
                                            {nested.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </>
                              )}
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