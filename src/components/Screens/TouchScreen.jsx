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
import { FaRulerCombined, FaQuoteRight, FaArrowRight, FaChevronRight } from "react-icons/fa";
import productData from "../../data/productsData.json";

const TouchScreens = () => {
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

  // Get products data from JSON
  useEffect(() => {
    const touchScreenData = productData["touch-screen"];
    if (touchScreenData && touchScreenData.products) {
      setProducts(touchScreenData.products);
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

  // Function to get display sizes from specifications
  const getDisplaySizes = (product) => {
    if (product.specifications?.display?.sizes) {
      return `${formatSizes(product.specifications.display.sizes)} Display`;
    }
    return "Multiple Sizes Available";
  };

  return (
    <>
      {/* Hero */}
      <section className="px-hero">
        <div className="px-hero-overlay">
          <h1>
            Discover Interactive <span className="px-highlight">Touch Screens Solutions</span>
          </h1>
          <p className="px-hero-desc">
            Professional touch screens displays with OS support, high brightness, and interactive touch capabilities for corporate, education, and commercial applications.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-section">
        <div className="px-container">
          <h2 className="px-section-title">Touch Screens Displays</h2>
          <p className="px-section-subtitle">High-performance interactive displays for professional environments</p>
          
          {products.length > 0 ? (
            products.map((product, index) => (
              <div
                className={`px-card ${index % 2 === 1 ? "px-reverse" : ""}`}
                key={product.id}
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
                        src="/Indoor/default-display.jpg" 
                        alt={product.name}
                        className="default-image"
                      />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="px-info">
                  <h3>{product.name}</h3>
                  <div className="px-sizes">
                    <FaRulerCombined aria-hidden="true" /> Display: <span>{getDisplaySizes(product)}</span>
                  </div>
                  <p className="px-desc">{product.full_desc || product.short_desc}</p>

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
                    <em>{product.short_desc}</em>
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
        <SpecsDialog
          product={selectedProduct}
          onClose={() => setShowDetails(false)}
          featuresLabel="Features"
          renderSpecs={renderSpecificationTable}
          renderFeatures={renderFeatures}
          renderApplications={renderApplications}
        />
      )}

      {/* CTA */}
      {/* <section className="px-cta">
        <div className="px-container">
          <h2>Ready for Digital Transformation?</h2>
          <p>
            Join hundreds of brands already using <strong>MULTIFX</strong> touch screen displays for corporate, retail, and control room applications.
          </p>
          <button className="px-main-cta">Explore All Products</button>
        </div>
      </section> */}
    </>
  );
};

export default TouchScreens;