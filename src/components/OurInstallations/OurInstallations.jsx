import React, { useState } from "react";
import img1 from "../../assets/Installations/ITC_Royal.avif";
import img2 from "../../assets/Installations/Melorra.avif";
import img3 from "../../assets/Installations/Merlin.avif";
import img4 from "../../assets/Installations/Naturals_Group.avif";
import img5 from "../../assets/Installations/Tutopia.avif";
import "./OurInstallations.css";

function Installations() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const slides = [
    { src: img1, title: "ITC Royal Bengal" },
    { src: img2, title: "Melorra" },
    { src: img3, title: "Merlin" },
    { src: img4, title: "Naturals Group" },
    { src: img5, title: "Tutopia" },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const handleSlideClick = (index) => {
    if (currentSlide === index) setIsZoomed(true);
    else setCurrentSlide(index);
  };

  return (
    <div className="installations-page">
      <div className="installations-header">
        <h1>OUR INSTALLATIONS</h1>
        <div className="header-line"></div>
      </div>

      <div className="slider">
        <button className="nav-btn prev" onClick={prevSlide}>
          ‹
        </button>

        <div className="slides">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${
                index === currentSlide
                  ? "active"
                  : index === (currentSlide - 1 + slides.length) % slides.length
                  ? "prev"
                  : index === (currentSlide + 1) % slides.length
                  ? "next"
                  : ""
              }`}
              onClick={() => handleSlideClick(index)}
            >
              <img src={slide.src} alt={slide.title} />
              <div className="slide-overlay"></div>
              <h2>{slide.title}</h2>
            </div>
          ))}
        </div>

        <button className="nav-btn next" onClick={nextSlide}>
          ›
        </button>
      </div>

      {isZoomed && (
        <div className="zoom-modal" onClick={() => setIsZoomed(false)}>
          <button className="close-btn" onClick={() => setIsZoomed(false)}>
            ×
          </button>
          <img
            src={slides[currentSlide].src}
            alt={slides[currentSlide].title}
            className="zoomed-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default Installations;
