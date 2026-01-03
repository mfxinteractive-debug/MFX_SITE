import React, { useState } from "react";
import "./Screens.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaRulerCombined, FaQuoteRight, FaArrowRight, FaTimes } from "react-icons/fa";
import productData from "../../data/productsData.json"; // Import your JSON file

const TouchScreen = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedModelIndex, setSelectedModelIndex] = useState(0);

  // Get touch screen data from JSON
  const touchScreenData = productData["touch-screen-display"];
  
  // Create products array from JSON data
  const products = touchScreenData.models.map((model, index) => {
    // Get available sizes from specs
    const panelSize = model.specs.Screen?.["Panel size"] || "43\"";
    const availableSizes = panelSize.includes("optional") 
      ? panelSize.replace(/.*\(optional: (.*)\)/, "$1")
      : panelSize;
    
    return {
      name: model.name,
      sizes: availableSizes,
      desc: index === 0 ? touchScreenData.shortDescription : touchScreenData.fullDescription,
      images: [
        `https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3`,
        `https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w-800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3`,
        `https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w-800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3`,
      ],
      tag: index === 0 ? "PC Version" : "Android Version",
      modelData: model,
    };
  });

  const handleDetailsClick = (product, index) => {
    setSelectedProduct(product);
    setSelectedModelIndex(index);
    setShowDetails(true);
  };

  const renderSpecsTable = () => {
    if (!selectedProduct) return null;
    
    const specs = selectedProduct.modelData.specs;
    
    return (
      <div className="specs-modal-content">
        <h3>{selectedProduct.name} - Specifications</h3>
        
        <div className="specs-grid">
          {Object.entries(specs).map(([category, categorySpecs]) => (
            <div key={category} className="specs-category">
              <h4 className="specs-category-title">{category}</h4>
              <div className="specs-table">
                {Object.entries(categorySpecs).map(([key, value]) => (
                  <div key={key} className="specs-row">
                    <div className="specs-key">{key}:</div>
                    <div className="specs-value">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="specs-features">
          <h4>Features</h4>
          <ul>
            {touchScreenData.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        
        <div className="specs-applications">
          <h4>Applications</h4>
          <div className="applications-tags">
            {touchScreenData.applications.map((app, index) => (
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
            Discover the Future of <span className="px-highlight">Interaction</span>
          </h1>
          <p className="px-hero-desc">
            {touchScreenData.fullDescription}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-section">
        <div className="px-container">
          <h2 className="section-title">{touchScreenData.name}</h2>
          <p className="section-subtitle">{touchScreenData.shortDescription}</p>
          
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
                {product.tag && <div className="px-badge">{product.tag}</div>}
              </div>

              {/* Content */}
              <div className="px-info">
                <h2>{product.name}</h2>
                <div className="px-sizes">
                  <FaRulerCombined /> Available Sizes: <span>{product.sizes}</span>
                </div>
                <p className="px-desc">{product.desc}</p>

                <div className="px-actions">
                  <button className="px-quote-btn">
                    Get Quote <FaArrowRight />
                  </button>
                  <button 
                    className="px-details-btn"
                    onClick={() => handleDetailsClick(product, index)}
                  >
                    View Details
                  </button>
                </div>

                <div className="px-quote">
                  <FaQuoteRight />
                  <em>Turn every touch into a memorable experience.</em>
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
              <h2>Product Specifications</h2>
              <button 
                className="specs-modal-close"
                onClick={() => setShowDetails(false)}
              >
                <FaTimes />
              </button>
            </div>
            {renderSpecsTable()}
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="px-cta">
        <div className="px-container">
          <h2>Ready to Transform Your Space?</h2>
          <p>
            Join hundreds of brands already using <strong>MULTIFX</strong> interactive displays to captivate audiences and drive results.
          </p>
          <button className="px-main-cta">Explore All Products</button>
        </div>
      </section>
    </>
  );
};

export default TouchScreen;