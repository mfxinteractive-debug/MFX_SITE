import React, { useState } from "react";
import "./Screens.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaRulerCombined, FaQuoteRight, FaArrowRight, FaTimes, FaChevronRight } from "react-icons/fa";
import productData from "../../data/productsData.json";

const Aikiosk = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [activeTab, setActiveTab] = useState("specTable");

  // Use the imported productData
  const { specifications } = productData;
  
  // Create products array
  const products = [
    {
      name: "Indoor LED - Professional Series",
      sizes: `${specifications.screen.panel_size.join('" & "')}" Display | ${specifications.screen.resolution} | ${specifications.screen.brightness}`,
      desc: "High-performance indoor LED display with dual OS support, perfect for corporate and educational environments.",
      images: [
        "/Indoor/Creative_01.jpg",
        "/Indoor/Creative_02.jpg",
        "/Indoor/Creative_03.jpg",
        "/Indoor/Creative_04.jpg",
        "/Indoor/Creative_06.jpg",
      ],
    }
    
  ];

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
      // Handle nested objects
      return Object.entries(value)
        .map(([key, val]) => {
          const formattedKey = key.split('_').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' ');
          return `${formattedKey}: ${val}`;
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
    return (
      <div className="specs-tab-content">
        <div className="specs-grid">
          {Object.entries(specifications).map(([category, categoryData]) => (
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
    return (
      <div className="specs-tab-content">
        <div className="specs-features">
          <h4>All Features</h4>
          <ul>
            {specifications.features.map((feature, index) => (
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
    const applications = [
      "Corporate Meetings",
      "Education & Training",
      "Retail Displays",
      "Control Rooms",
      "Digital Signage",
      "Conference Rooms"
    ];
    
    return (
      <div className="specs-tab-content">
        <div className="specs-applications">
          <h4>Applications</h4>
          <div className="applications-tags">
            {applications.map((app, index) => (
              <span key={index} className="app-tag">{app}</span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Hero */}
      <section className="px-hero">
        <div className="px-hero-overlay">
          <h1>
            Discover Indoor <span className="px-highlight">LED Solutions</span>
          </h1>
          <p className="px-hero-desc">
            Professional indoor LED displays with dual OS support, high brightness, and interactive touch capabilities for corporate, education, and commercial applications.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-section">
        <div className="px-container">
          <h2 className="section-title">Indoor LED Displays</h2>
          <p className="section-subtitle">High-performance interactive displays for professional environments</p>
          
          {products.map((product, index) => (
            <div
              className={`px-card ${index % 2 === 1 ? "px-reverse" : ""}`}
              key={index}
            >
              {/* Image Slider */}
              <div className="px-gallery">
                <Swiper
                  modules={[Autoplay, Pagination, Navigation]}
                  pagination={{ clickable: true }}
                  navigation={true}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                  className="px-swiper"
                >
                  {product.images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <div className="px-image-wrapper">
                        <img src={img} alt={`${product.name} view ${i + 1}`} />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Content */}
              <div className="px-info">
                <h2>{product.name}</h2>
                <div className="px-sizes">
                  <FaRulerCombined /> Specifications: <span>{product.sizes}</span>
                </div>
                <p className="px-desc">{product.desc}</p>

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
                  <em>Superior image quality with seamless integration.</em>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Specifications Modal */}
      {showDetails && (
        <div className="specs-modal-overlay">
          <div className="specs-modal">
            <div className="specs-modal-header">
              <h2>{selectedProduct?.name} - Complete Specifications</h2>
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

    
    </>
  );
};

export default Aikiosk;