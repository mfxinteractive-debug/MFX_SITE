import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Screens.css";
import SpecsDialog from "./SpecsDialog";
import formatSizes from "./formatSizes";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaRulerCombined, FaQuoteRight, FaArrowRight, FaChevronRight, FaRobot, FaMicrochip, FaCamera } from "react-icons/fa";
import productData from "../../data/Ai_Kiosk.json";

const Ai_Kiosk = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
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

  // Get AI Kiosk data from JSON
  useEffect(() => {
    // Try different possible keys for AI Kiosk data
    const aiKioskData = productData["ai-kiosk"] || 
                       productData["ai_kiosk"] || 
                       productData["aikiosk"] || 
                       productData["kiosk"];
    
    if (aiKioskData && aiKioskData.products) {
      setProducts(aiKioskData.products);
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
                {/* List-type categories (e.g. connectivity) are arrays: show them as one row. */}
                {(Array.isArray(categoryData) ? [["included", categoryData]] : Object.entries(categoryData)).map(([key, value]) => (
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
                <FaChevronRight className="px-feature-icon" aria-hidden="true" />
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

  // Function to get AI Kiosk specifications
  const getDisplaySpecs = (product) => {
    const specs = [];
    
    // Check for display size
    if (product.specifications?.display?.size) {
      specs.push(`${product.specifications.display.size}" Touch Screen`);
    } else if (product.specifications?.display?.sizes) {
      if (Array.isArray(product.specifications.display.sizes)) {
        specs.push(`${formatSizes(product.specifications.display.sizes)} Touch Screen`);
      } else {
        specs.push(`${product.specifications.display.sizes}" Touch Screen`);
      }
    }
    
    // Check for AI capabilities
    if (product.specifications?.ai?.capabilities) {
      if (Array.isArray(product.specifications.ai.capabilities)) {
        specs.push(product.specifications.ai.capabilities.join(', '));
      } else {
        specs.push(product.specifications.ai.capabilities);
      }
    }
    
    // Check for processor
    if (product.specifications?.hardware?.processor) {
      specs.push(product.specifications.hardware.processor);
    }
    
    // If no specs found, return default text
    if (specs.length === 0) {
      return "AI-Powered Interactive Kiosk";
    }
    
    return specs.join(" | ");
  };

  // Function to render AI-specific icons
  const renderAIHighlights = (product) => {
    const highlights = [];
    
    if (product.specifications?.ai?.facial_recognition === "Yes") {
      highlights.push({ icon: <FaCamera />, text: "Facial Recognition" });
    }
    
    if (product.specifications?.ai?.voice_assistant === "Yes") {
      highlights.push({ icon: <FaMicrochip />, text: "Voice AI" });
    }
    
    if (product.specifications?.hardware?.processor?.includes("AI") || 
        product.specifications?.hardware?.processor?.includes("Neural")) {
      highlights.push({ icon: <FaRobot />, text: "AI Processor" });
    }
    
    if (highlights.length === 0) {
      return null;
    }
    
    return (
      <div className="ai-highlights">
        {highlights.map((highlight, index) => (
          <div key={index} className="ai-highlight-item">
            {highlight.icon}
            <span>{highlight.text}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* Hero */}
      <section className="px-hero">
        <div className="px-hero-overlay">
          <h1>
            Intelligent <span className="px-highlight">AI Kiosk Solutions</span>
          </h1>
          <p className="px-hero-desc">
            Smart AI-powered interactive kiosks with facial recognition, voice interaction, and personalized user experiences for retail, hospitality, and corporate environments.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-section">
        <div className="px-container">
          <h2 className="px-section-title">AI-Powered Interactive Kiosks</h2>
          <p className="px-section-subtitle">Next-generation smart kiosks with artificial intelligence and advanced interaction capabilities</p>
          
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
                      autoplay={
                        window.matchMedia("(prefers-reduced-motion: reduce)").matches
                          ? false
                          : { delay: 3000, disableOnInteraction: false }
                      }
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
                        src="/AI-Kiosk/default-kiosk.jpg" 
                        alt={product.name}
                        className="default-image"
                      />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="px-info">
                  <h3>{product.name}</h3>
                  
                  {/* AI Highlights */}
                  {renderAIHighlights(product)}
                  
                  <div className="px-sizes">
                    <FaRulerCombined aria-hidden="true" /> Specifications: <span>{getDisplaySpecs(product)}</span>
                  </div>
                  <p className="px-desc">{product.full_desc || product.short_desc || product.description}</p>

                  <div className="px-actions">
                    <Link className="px-quote-btn" to="/contact">
                      Get Quote <FaArrowRight aria-hidden="true" />
                    </Link>
                    <button
                      type="button"
                      className="px-details-btn"
                      onClick={() => handleDetailsClick(product)}
                    >
                      View Details
                    </button>
                  </div>

                  <div className="px-quote">
                    <FaQuoteRight aria-hidden="true" />
                    <em>{product.short_desc || "Intelligent AI-powered interactive kiosk"}</em>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-products">
              <h3>No AI Kiosk products available</h3>
              <p>Please check back later or contact us for more information.</p>
            </div>
          )}
        </div>
      </section>

      {/* Specifications Modal */}
      {showDetails && selectedProduct && (
        <SpecsDialog
          product={selectedProduct}
          onClose={() => setShowDetails(false)}
          featuresLabel="AI Features"
          renderSpecs={renderSpecificationTable}
          renderFeatures={renderFeatures}
          renderApplications={renderApplications}
        />
      )}

      {/* CTA - Commented out as per other pages */}
      {/* <section className="px-cta">
        <div className="px-container">
          <h2>Transform Customer Interactions with AI</h2>
          <p>
            Deploy intelligent AI kiosks to enhance customer experience and streamline operations.
          </p>
          <button className="px-main-cta">Request AI Kiosk Demo</button>
        </div>
      </section> */}
    </>
  );
};

export default Ai_Kiosk;