import React, { useState, useEffect } from "react";
import img1 from "../../assets/Installations/ITC_Royal.avif";
import img2 from "../../assets/Installations/Melorra.avif";
import img3 from "../../assets/Installations/Merlin.avif";
import img4 from "../../assets/Installations/Naturals_Group.avif";
import img5 from "../../assets/Installations/Tutopia.avif";
import "./OurInstallations.css";

function Installations() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    { src: img1, title: "ITC Royal Bengal" },
    { src: img2, title: "Melorra" },
    { src: img3, title: "Merlin" },
    { src: img4, title: "Naturals Group" },
    { src: img5, title: "Tutopia" },
  ];

  // Auto-play (every 5 seconds)
  useEffect(() => {
    if (isPaused || isZoomed) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, isPaused, isZoomed, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsPaused(true); // pause auto on manual nav
    setTimeout(() => setIsPaused(false), 10000); // resume after 10s
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  return (
    <section className="installations-section">
      <div className="installations-container">
        <div className="installations-header">
          <h1>Our Installations</h1>
          <p className="header-subtitle">
            Premium digital display solutions brought to life
          </p>
          <div className="header-accent"></div>
        </div>

        <div
          className="slider-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="slider">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`slide ${
                  index === currentSlide ? "active" : ""
                }`}
                onClick={() => index === currentSlide && setIsZoomed(true)}
              >
                <img src={slide.src} alt={slide.title} loading="lazy" />
                <div className="slide-overlay"></div>
                <h2 className="slide-title">{slide.title}</h2>
              </div>
            ))}
          </div>

          <button className="nav-btn prev" onClick={prevSlide}>
            ‹
          </button>
          <button className="nav-btn next" onClick={nextSlide}>
            ›
          </button>

          <div className="slider-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {isZoomed && (
        <div className="zoom-modal" onClick={() => setIsZoomed(false)}>
          <button className="close-btn" onClick={() => setIsZoomed(false)}>
            ×
          </button>
          <div className="modal-content">
            <img
              src={slides[currentSlide].src}
              alt={slides[currentSlide].title}
              className="zoomed-image"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="modal-caption">{slides[currentSlide].title}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Installations;