import React from "react";
import "./Products.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaRulerCombined, FaQuoteRight, FaArrowRight } from "react-icons/fa";

const Products = () => {
  const products = [
    {
      name: "Interactive Kiosks",
      sizes: "21″ • 32″ • 43″ • 55″ • 65″",
      desc: "The ultimate self-service solution. Replace traditional signage with powerful multi-touch kiosks that engage, inform, and convert. Perfect for retail, malls, hospitals, airports, and corporate lobbies.",
      images: [
        "https://static.wixstatic.com/media/8b078c_41188379803f4a0c997446aed3f52286~mv2.jpg",
        "https://static.wixstatic.com/media/8b078c_5c8ab6f9ab82422f98c915cd49ff95cc~mv2.jpg",
        "https://static.wixstatic.com/media/8b078c_9cbebf2a179f4b72aa04f2d30bfe905c~mv2.jpg",
      ],
      tag: "Best Seller",
    },
    {
      name: "Interactive Touch Tables",
      sizes: "32″ • 43″ • 55″ • 65″",
      desc: "Designed for collaboration and wow-factor. Ideal for education, meeting rooms, museums, showrooms, and experiential marketing. Supports 40+ simultaneous touch points.",
      images: [
        "https://static.wixstatic.com/media/8b078c_7b3a899827dd469e9e3b4f00eae4c8b1~mv2.jpg",
        "https://static.wixstatic.com/media/8b078c_bbb4b55d053c480eb4a0f753ec542c62~mv2.jpg",
        "https://static.wixstatic.com/media/8b078c_3c2fdf93b4fc41208de73e8904b22853~mv2.jpg",
      ],
      tag: "Most Versatile",
    },
    {
      name: "Interactive Digital Easels",
      sizes: "32″ • 43″ • 55″",
      desc: "Elegance meets interactivity. Perfect for art galleries, luxury retail, hotels, and creative presentations. Portable, stylish, and built to impress.",
      images: [
        "https://static.wixstatic.com/media/8b078c_2a29c9b5dff04a7b9021d20c9a1de171~mv2.jpg",
        "https://static.wixstatic.com/media/8b078c_7985ad16e7c54322b45b72de2cd6546c~mv2.jpg",
        "https://static.wixstatic.com/media/8b078c_34b6b44701b64f169b7adf4d9efb9cd4~mv2.jpg",
      ],
      tag: "Premium Design",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="products-hero">
        <div className="hero-overlay">
          <h1>
            Discover the Future of <span className="highlight">Interaction</span>
          </h1>
          <p className="hero-desc">
            Premium Interactive Displays Built for Engagement, Collaboration & Results
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-section">
        <div className="container">
          {products.map((product, index) => (
            <div
              className={`product-card ${index % 2 === 1 ? "reverse" : ""}`}
              key={index}
            >
              {/* Image Slider */}
              <div className="product-gallery">
                <Swiper
                  modules={[Autoplay, Pagination, Navigation]}
                  pagination={{ clickable: true }}
                  navigation={true}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                  className="product-swiper"
                >
                  {product.images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <div className="image-wrapper">
                        <img src={img} alt={`${product.name} view ${i + 1}`} />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                {product.tag && <div className="product-badge">{product.tag}</div>}
              </div>

              {/* Content */}
              <div className="product-info">
                <h2>{product.name}</h2>
                <div className="sizes">
                  <FaRulerCombined /> Available Sizes: <span>{product.sizes}</span>
                </div>
                <p className="desc">{product.desc}</p>

                <div className="actions">
                  <button className="quote-btn">
                    Get Quote <FaArrowRight />
                  </button>
                  <button className="demo-btn">Request Demo</button>
                </div>

                <div className="quote-quote">
                  <FaQuoteRight />
                  <em>Turn every touch into a memorable experience.</em>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="products-cta">
        <div className="container">
          <h2>Ready to Transform Your Space?</h2>
          <p>
            Join hundreds of brands already using <strong>MULTIFX</strong> interactive displays to captivate audiences and drive results.
          </p>
          <button className="main-cta">Explore All Products</button>
        </div>
      </section>
    </>
  );
};

export default Products;