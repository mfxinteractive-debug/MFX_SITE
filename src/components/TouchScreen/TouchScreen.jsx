import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import productsData from '../../data/productsData.json';
import '../AllProduct.css';

function TouchScreen() {
  const location = useLocation();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const [activeModel, setActiveModel] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Extract product ID from URL
    const path = location.pathname.toLowerCase();
    let productKey = '';
    
    // Simple mapping from URL to product key
    if (path.includes('touch-screen-display')) {
      productKey = 'touch-screen-display';
    } else if (path.includes('outdoor-led')) {
      productKey = 'outdoor-led';
    } else if (path.includes('indoor-led')) {
      productKey = 'indoor-led';
    } else if (path.includes('ai-kiosks')) {
      productKey = 'ai-kiosks';
    }
    
    console.log('Loading product for key:', productKey);
    console.log('Available products:', Object.keys(productsData));
    
    // Get product data
    if (productKey && productsData[productKey]) {
      setProduct(productsData[productKey]);
      console.log('Product loaded successfully:', productsData[productKey].name);
    } else {
      console.log('Product not found for key:', productKey);
    }
    
    setLoading(false);
  }, [location.pathname]);

  const handleRequestQuote = () => {
    // Navigate to contact page
    navigate('/contact');
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleImageError = (e, imageType = 'main') => {
    console.log('Image load error for:', product?.name);
    setImageError(true);
    
    if (imageType === 'main') {
      e.target.src = `https://via.placeholder.com/800x500/042b30/ffffff?text=${encodeURIComponent(product?.name || 'Product Image')}`;
      e.target.style.objectFit = 'contain';
    } else {
      e.target.src = `https://via.placeholder.com/120x90/be2426/ffffff?text=Product`;
    }
  };

  if (loading) {
    return (
      <div className="product-loading">
        <div className="loading-spinner"></div>
        <p>Loading product details...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found</h2>
        <p>The product you're looking for doesn't exist.</p>
        <p>URL: {location.pathname}</p>
        <Link to="/products" className="back-btn">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link to="/">Home</Link> / 
        <Link to="/products">Products</Link> / 
        <span>{product.name}</span>
      </nav>

      {/* Product Header */}
      <header className="product-header">
        <div className="product-title-section">
          <h1>{product.name}</h1>
          <p className="product-category">{product.category}</p>
          <p className="product-description">{product.shortDescription}</p>
        </div>
      </header>

      {/* Main Product Photo with Thumbnails */}
      <div className="product-photo-section">
        <div className="main-product-photo">
          <div className="main-image-container">
            <img 
              src={product.images[activeImage]} 
              alt={product.name}
              className="main-image"
              onError={(e) => handleImageError(e, 'main')}
              loading="lazy"
            />
          </div>
          
          {/* Thumbnail Container */}
          <div className="thumbnail-section">
            <h3>View More Images</h3>
            <div className="thumbnail-container">
              {product.images.map((img, index) => (
                <div 
                  key={index}
                  className={`thumbnail ${activeImage === index ? 'active' : ''}`}
                  onClick={() => {
                    setActiveImage(index);
                    setImageError(false);
                  }}
                >
                  <img 
                    src={img} 
                    alt={`${product.name} ${index + 1}`}
                    onError={(e) => handleImageError(e, 'thumbnail')}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Model Selection */}
        <div className="model-selection-section">
          <h3>Available Models</h3>
          <div className="model-buttons">
            {product.models.map((model, index) => (
              <button
                key={index}
                className={`model-btn ${activeModel === index ? 'active' : ''}`}
                onClick={() => setActiveModel(index)}
              >
                {model.name}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="product-action-buttons">
          <button className="quote-action-btn" onClick={handleRequestQuote}>
            Request Quote
          </button>
          <button className={`details-action-btn ${showDetails ? 'active' : ''}`} onClick={toggleDetails}>
            {showDetails ? 'Hide Details' : 'See Details'}
          </button>
        </div>
      </div>

      {/* Specifications Table - Only shown when See Details is clicked */}
      {showDetails && product.models[activeModel] && (
        <div className="specifications-container">
          <h3>Technical Specifications - {product.models[activeModel].name}</h3>
          <div className="specs-table-container">
            <table className="specs-table-full">
              <tbody>
                {Object.entries(product.models[activeModel].specs).map(([category, specs]) => (
                  <React.Fragment key={category}>
                    {/* Category Header Row */}
                    <tr className="spec-category-row">
                      <td colSpan="2" className="spec-category-header">
                        {category}
                      </td>
                    </tr>
                    
                    {/* Specification Rows */}
                    {Object.entries(specs).map(([key, value]) => (
                      <tr key={key} className="spec-row-full">
                        <td className="spec-key-full">{key}</td>
                        <td className="spec-value-full">{value}</td>
                      </tr>
                    ))}
                    
                    {/* Spacer row between categories */}
                    <tr className="spec-spacer">
                      <td colSpan="2"></td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Features Section */}
      <div className="features-section">
        <h2>Key Features</h2>
        <div className="features-grid">
          {product.features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">✓</div>
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Applications Section */}
      <div className="applications-section">
        <h2>Common Applications</h2>
        <div className="applications-grid">
          {product.applications.map((app, index) => (
            <div key={index} className="application-card">
              <h4>{app}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Related Products */}
      <div className="related-products">
        <h2>Other Products You Might Like</h2>
        <div className="related-grid">
          {Object.values(productsData)
            .filter(p => p.id !== product.id)
            .slice(0, 3)
            .map((relatedProduct) => (
              <Link to={`/${relatedProduct.id}`} key={relatedProduct.id} className="related-card">
                <div className="related-image">
                  <img 
                    src={relatedProduct.images[0]} 
                    alt={relatedProduct.name}
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/300x200/042b30/ffffff?text=${encodeURIComponent(relatedProduct.name)}`;
                      e.target.style.objectFit = 'contain';
                    }}
                    loading="lazy"
                  />
                </div>
                <div className="related-info">
                  <h4>{relatedProduct.name}</h4>
                  <p>{relatedProduct.shortDescription}</p>
                  <span className="view-link">View Details →</span>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default TouchScreen;