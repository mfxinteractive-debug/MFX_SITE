import React, { useState, useEffect } from 'react';
import './SliderPage.css';

const Carousel = () => {
  const slides = [
    // {
    //   id: 1,
    //   image: '/Banner/1.jpeg',
    //   title: 'Majestic Mountains',
    //   subtitle: 'Explore the beauty of nature',
    // },
    {
      id: 2,
      image: '/Banner/2.jpeg',
      title: 'Ocean Waves',
      subtitle: 'Feel the serenity of the sea',
    },
    {
      id: 3,
      image: '/Banner/3.jpeg',
      title: 'Misty Forests',
      subtitle: 'Lost in the green wilderness',
    },
    // {
    //   id: 4,
    //   image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1400',
    //   title: 'City Lights',
    //   subtitle: 'The heartbeat of urban life',
    // },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="carousel-slide">
            <img src={slide.image} alt={slide.title} />
            <div className="carousel-caption">
              <h2>{slide.title}</h2>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Removed prev/next buttons completely */}

      {/* Dots Indicator */}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;