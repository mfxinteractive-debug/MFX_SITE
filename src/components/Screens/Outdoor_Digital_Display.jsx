import React, { useState, useEffect } from "react";
import "./Screens.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaRulerCombined, FaQuoteRight, FaArrowRight, FaTimes, FaChevronRight } from "react-icons/fa";
import productData from "../../data/Outdoor_Displays.json";

const Outdoor_Displays = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [activeTab, setActiveTab] = useState("specTable");
  const [products, setProducts] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Get outdoor displays data from JSON
  useEffect(() => {
    // Change this key to match your JSON structure - could be "outdoor-displays", "outdoor", etc.
    const outdoorData = productData["outdoor-displays"] || productData["outdoor"] || productData["outdoor_led"];
    
    if (outdoorData && outdoorData.products) {
      setProducts(outdoorData.products);
    } else if (Array.isArray(productData)) {
      // If the JSON is directly an array
      setProducts(productData);
    } else if (productData.products) {
      // If there's a general products array
      setProducts(productData.products);
    }
  }, []);

  const handleDetailsClick = (product) => {
    setSelectedProduct(product);
    setActiveTab("specTable");
    setShowDetails(true);
  };

  // Helper function to format values properly
  const formatValue = (value) => {
    if (Array.isArray(value)) {
      return value.join(', ');
    } else if (typeof value === 'object' && value !== null) {
      return Object.entries(value)
        .map(([key, val]) => {
          const formattedKey = key.split('_').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' ');
          return `${formattedKey}: ${formatValue(val)}`;
        })
        .join('; ');
    }
    return value;
  };

  // Helper function to format keys
  const formatKey = (key) => {
    return key.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const renderSpecificationTable = () => {
    if (!selectedProduct?.specifications) return null;

    return (
      <div className="specs-tab-content">
        <div className="specs-grid">
          {Object.entries(selectedProduct.specifications).map(([category, categoryData]) => (
            <div key={category} className="specs-category">
              <h4 className="specs-category-title">
                {formatKey(category)}
              </h4>
              <div className="specs-table">
                {Object.entries(categoryData).map(([key, value]) => (
                  <div key={key} className="specs-row">
                    <div className="specs-key">
                      {formatKey(key)}:
                    </div>
                    <div className="specs-value">
                      {formatValue(value)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderFeatures = () => {
    if (!selectedProduct?.features) return null;

    return (
      <div className="specs-tab-content">
        <div className="specs-features">
          <h4>Key Features</h4>
          <ul>
            {selectedProduct.features.map((feature, index) => (
              <li key={index}>
                <FaChevronRight className="feature-icon" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  const renderApplications = () => {
    if (!selectedProduct?.applications) return null;

    return (
      <div className="specs-tab-content">
        <div className="specs-applications">
          <h4>Applications</h4>
          <div className="applications-tags">
            {selectedProduct.applications.map((app, index) => (
              <span key={index} className="app-tag">{app}</span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Function to get display specifications
  const getDisplaySpecs = (product) => {
    const specs = [];
    
    // Check for LED-specific specs first
    if (product.specifications?.display?.pixel_pitch) {
      specs.push(product.specifications.display.pixel_pitch);
    }
    
    // Check for size/sizes
    if (product.specifications?.display?.sizes) {
      if (Array.isArray(product.specifications.display.sizes)) {
        specs.push(`${product.specifications.display.sizes.join('", "')}"`);
      } else {
        specs.push(product.specifications.display.sizes);
      }
    } else if (product.specifications?.display?.size) {
      specs.push(product.specifications.display.size);
    }
    
    // Check for brightness
    if (product.specifications?.display?.brightness) {
      specs.push(product.specifications.display.brightness);
    }
    
    // Check for outdoor-specific specs
    if (product.specifications?.protection?.ip_rating) {
      specs.push(`IP${product.specifications.protection.ip_rating}`);
    }
    
    // If no specs found, return default text
    if (specs.length === 0) {
      return "Professional Outdoor Display";
    }
    
    return specs.join(" | ");
  };

  return (
    <>
      {/* Hero */}
      <section className="px-hero">
        <div className="px-hero-overlay">
          <h1>
            Professional <span className="px-highlight">Outdoor Displays</span>
          </h1>
          <p className="px-hero-desc">
            Weather-resistant outdoor display solutions with high brightness, durable construction, and superior visibility for advertising, information, and entertainment applications.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-section">
        <div className="px-container">
          <h2 className="section-title">Outdoor Display Solutions</h2>
          <p className="section-subtitle">Durable, weatherproof displays for outdoor advertising and public information systems</p>
          
          {products.length > 0 ? (
            products.map((product, index) => (
              <div
                className={`px-card ${index % 2 === 1 ? "px-reverse" : ""}`}
                key={product.id || index}
              >
                {/* Image Slider */}
                <div className="px-gallery">
                  {product.images && product.images.length > 0 ? (
                    <Swiper
                      modules={[Autoplay, Pagination, Navigation]}
                      pagination={{ 
                        clickable: true,
                        dynamicBullets: true 
                      }}
                      navigation={!isMobile}
                      autoplay={{ 
                        delay: 3000, 
                        disableOnInteraction: false 
                      }}
                      loop={true}
                      className="px-swiper"
                    >
                      {product.images.map((img, i) => (
                        <SwiperSlide key={i}>
                          <div className="px-image-wrapper">
                            <img 
                              src={img} 
                              alt={`${product.name} view ${i + 1}`}
                              loading="lazy"
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : (
                    <div className="px-image-wrapper">
                      <img 
                        src="/Outdoor/default-display.jpg" 
                        alt={product.name}
                        className="default-image"
                      />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="px-info">
                  <h2>{product.name}</h2>
                  <div className="px-sizes">
                    <FaRulerCombined /> Specifications: <span>{getDisplaySpecs(product)}</span>
                  </div>
                  <p className="px-desc">{product.full_desc || product.short_desc || product.description}</p>

                  <div className="px-actions">
                    <button className="px-quote-btn">
                      Get Quote <FaArrowRight />
                    </button>
                    <button 
                      className="px-details-btn"
                      onClick={() => handleDetailsClick(product)}
                    >
                      View Details
                    </button>
                  </div>

                  <div className="px-quote">
                    <FaQuoteRight />
                    <em>{product.short_desc || "Professional outdoor display solution"}</em>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-products">
              <h3>No products available</h3>
              <p>Please check back later or contact us for more information.</p>
            </div>
          )}
        </div>
      </section>

      {/* Specifications Modal */}
      {showDetails && selectedProduct && (
        <div className="specs-modal-overlay" onClick={() => setShowDetails(false)}>
          <div className="specs-modal" onClick={(e) => e.stopPropagation()}>
            <div className="specs-modal-header">
              <h2>{selectedProduct.name} - Complete Specifications</h2>
              <button 
                className="specs-modal-close"
                onClick={() => setShowDetails(false)}
              >
                <FaTimes />
              </button>
            </div>
            
            {/* Tabs */}
            <div className="specs-tabs">
              <button 
                className={`specs-tab ${activeTab === "specTable" ? "active" : ""}`}
                onClick={() => setActiveTab("specTable")}
              >
                Technical Specifications
              </button>
              <button 
                className={`specs-tab ${activeTab === "features" ? "active" : ""}`}
                onClick={() => setActiveTab("features")}
              >
                Features
              </button>
              <button 
                className={`specs-tab ${activeTab === "applications" ? "active" : ""}`}
                onClick={() => setActiveTab("applications")}
              >
                Applications
              </button>
            </div>

            <div className="specs-modal-content">
              {activeTab === "specTable" && renderSpecificationTable()}
              {activeTab === "features" && renderFeatures()}
              {activeTab === "applications" && renderApplications()}
            </div>
          </div>
        </div>
      )}

      {/* CTA - Commented out as per other pages */}
      {/* <section className="px-cta">
        <div className="px-container">
          <h2>Transform Your Outdoor Spaces</h2>
          <p>
            Enhance visibility and engagement with professional outdoor display solutions.
          </p>
          <button className="px-main-cta">Request Outdoor Display Quote</button>
        </div>
      </section> */}
    </>
  );
};

export default Outdoor_Displays;