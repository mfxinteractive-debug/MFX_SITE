import React, { useState } from "react";
import "./Screens.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaRulerCombined, FaQuoteRight, FaArrowRight, FaTimes } from "react-icons/fa";
import productData from "../../data/productsData.json"; // Import your JSON file

const Aikiosk = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  // Get AI kiosk data from JSON
  const aiData = productData["ai-kiosks"];
  
  // Create products array from JSON data
  const products = aiData.models.map((model, index) => {
    // Get hardware specs
    const screenSize = model.specs.Hardware?.["Screen Size"] || "32\"/43\"/55\"";
    const processor = model.specs.Hardware?.Processor || "Intel i5/i7";
    const aiFeatures = "Facial Recognition, Voice Interaction, Gesture Control";
    
    return {
      name: `${aiData.name} - ${model.name}`,
      sizes: `${screenSize} | ${processor} | AI Features`,
      desc: index === 0 ? aiData.shortDescription : aiData.fullDescription,
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
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
            {aiData.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        
        <div className="specs-applications">
          <h4>Applications</h4>
          <div className="applications-tags">
            {aiData.applications.map((app, index) => (
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
            Discover <span className="px-highlight">AI-Powered</span> Interactive Solutions
          </h1>
          <p className="px-hero-desc">
            {aiData.fullDescription}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-section">
        <div className="px-container">
          <h2 className="section-title">{aiData.name}</h2>
          <p className="section-subtitle">{aiData.shortDescription}</p>
          
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
                  <em>Revolutionize customer interaction with AI intelligence.</em>
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
          <h2>Ready for AI-Powered Digital Transformation?</h2>
          <p>
            Join hundreds of brands already using <strong>MULTIFX</strong> AI kiosks for intelligent customer interaction and engagement.
          </p>
          <button className="px-main-cta">Explore All Products</button>
        </div>
      </section>
    </>
  );
};

export default Aikiosk;