import React, { useState } from "react";
import "./Screens.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaRulerCombined, FaQuoteRight, FaArrowRight, FaTimes } from "react-icons/fa";
import productData from "../../data/productsData.json"; // Import your JSON file

const Outdoor = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  // Get outdoor LED data from JSON
  const outdoorData = productData["outdoor-led"];
  
  // Create products array from JSON data
  const products = outdoorData.models.map((model, index) => {
    // Get display specs
    const pixelPitch = model.specs.Display?.["Pixel Pitch"] || "P4";
    const brightness = model.specs.Display?.Brightness || "5000-8000 nits";
    const ipRating = model.specs.Display?.["IP Rating"] || "IP65";
    
    return {
      name: `${outdoorData.name} - ${model.name}`,
      sizes: `${pixelPitch} Pixel Pitch | ${brightness} | ${ipRating}`,
      desc: index === 0 ? outdoorData.shortDescription : outdoorData.fullDescription,
      images: [
        "https://images.unsplash.com/photo-1518834103325-6725c4b54c14?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1563089145-599997674d42?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1590691565924-90d0a14443e8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      ],
      tag: model.name,
      modelData: model,
    };
  });

  const handleDetailsClick = (product) => {
    setSelectedProduct(product);
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
            {outdoorData.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        
        <div className="specs-applications">
          <h4>Applications</h4>
          <div className="applications-tags">
            {outdoorData.applications.map((app, index) => (
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
            Discover Outdoor <span className="px-highlight">LED Solutions</span>
          </h1>
          <p className="px-hero-desc">
            {outdoorData.fullDescription}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-section">
        <div className="px-container">
          <h2 className="section-title">{outdoorData.name}</h2>
          <p className="section-subtitle">{outdoorData.shortDescription}</p>
          
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
                  <em>Designed to withstand the toughest outdoor conditions.</em>
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
          <h2>Ready for Outdoor Digital Transformation?</h2>
          <p>
            Join hundreds of brands already using <strong>MULTIFX</strong> outdoor LED displays for impactful advertising and information display.
          </p>
          <button className="px-main-cta">Explore All Products</button>
        </div>
      </section>
    </>
  );
};

export default Outdoor;