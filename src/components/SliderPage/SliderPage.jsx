import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./SliderPage.css";

const BANNER_WIDTH = 1920;
const BANNER_HEIGHT = 400;
const AUTOPLAY_MS = 6000;

/*
 * The banners are 1920x400 promotional artwork with text baked in. Desktop shows
 * each one whole. Narrow screens cannot show 4.8:1 artwork legibly, so they get
 * their own composition: a crop of the product photography (`crop` is the
 * horizontal pixel range of the source to keep, chosen to avoid the baked text)
 * paired with the banner's message as real, readable HTML.
 */
const slides = [
  {
    id: "standalone-signage",
    image: "/Banner/2.jpeg",
    alt: "Super thin stand-alone digital signage: 1080P HD, multi-touch, full alloy body, split screen, Wi-Fi, 178° viewing angle, Android or Windows, in 43, 49, 55 and 65 inch sizes",
    crop: [1054, 1394],
    panel: "linear-gradient(180deg, #f1f1f1 0%, #e4e4e4 100%)",
    eyebrow: "Digital Signage",
    title: "Super Thin Stand-Alone Digital Signage",
    text: "Full alloy body, intelligent split screen and easy Wi-Fi connection. Android or Windows optional.",
    chips: ["1080P HD", "Multi-touch", "178° viewing", "43″ – 65″"],
    cta: { label: "Explore Displays", to: "/touch-screen-display" },
    secondary: { label: "Get a Quote", to: "/contact" },
  },
  {
    id: "seventeen-years",
    image: "/Banner/3.jpeg",
    alt: "Over 17 years as an LCD digital advertising display manufacturer. Includes MWE free CMS for easy content publication.",
    crop: [1390, 1905],
    panel: "linear-gradient(180deg, #4b5a63 0%, #9aa3a8 100%)",
    eyebrow: "Over 17 Years",
    title: "LCD Digital Advertising Display Manufacturer",
    text: "Includes MWE Free CMS for easy content publication.",
    chips: ["Indoor & outdoor", "Free CMS", "Custom builds"],
    cta: { label: "View Outdoor Displays", to: "/outdoor-digital-displays" },
    secondary: { label: "Schedule a Demo", to: "/contact" },
  },
];

const cropStyle = ({ crop: [start, end], panel }) => {
  const visible = end - start;
  return {
    "--crop-aspect": (visible / BANNER_HEIGHT).toFixed(4),
    "--crop-x": `${((start / (BANNER_WIDTH - visible)) * 100).toFixed(2)}%`,
    "--crop-panel": panel,
  };
};

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const pointerStart = useRef(null);
  const didSwipe = useRef(false);

  // Never auto-advance for people who prefer reduced motion.
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (query.matches) setIsPlaying(false);
  }, []);

  // `manual` = a person chose the slide; autoplay then stops for good, which
  // stands in for a pause button (WCAG 2.2.2).
  const goToSlide = useCallback((index, manual = false) => {
    setCurrentIndex((index + slides.length) % slides.length);
    if (manual) setIsPlaying(false);
  }, []);

  const isRunning = isPlaying && !isHovered && !hasFocus;

  useEffect(() => {
    if (!isRunning) return undefined;
    const timer = setTimeout(() => goToSlide(currentIndex + 1), AUTOPLAY_MS);
    return () => clearTimeout(timer);
  }, [currentIndex, isRunning, goToSlide]);

  const handlePointerDown = (event) => {
    pointerStart.current = { x: event.clientX, y: event.clientY };
  };

  const handlePointerUp = (event) => {
    if (!pointerStart.current) return;
    const dx = event.clientX - pointerStart.current.x;
    const dy = event.clientY - pointerStart.current.y;
    pointerStart.current = null;
    didSwipe.current = Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy);
    if (didSwipe.current) {
      goToSlide(currentIndex + (dx < 0 ? 1 : -1), true);
    }
  };

  // A swipe should change slides, not follow the link it started on.
  const handleClickCapture = (event) => {
    if (didSwipe.current) {
      event.preventDefault();
      event.stopPropagation();
      didSwipe.current = false;
    }
  };

  return (
    <section
      className="hero-carousel"
      aria-roledescription="carousel"
      aria-label="Featured display promotions"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setHasFocus(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setHasFocus(false);
      }}
    >
      <div
        className="hero-carousel__viewport"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => (pointerStart.current = null)}
        onClickCapture={handleClickCapture}
      >
        <div
          className="hero-carousel__track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          aria-live={isPlaying ? "off" : "polite"}
        >
          {slides.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={slide.id}
                className="hero-slide"
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${slides.length}`}
                aria-hidden={!isActive}
                inert={!isActive}
                style={cropStyle(slide)}
              >
                <div className="hero-slide__media">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    width={BANNER_WIDTH}
                    height={BANNER_HEIGHT}
                    loading="eager"
                    decoding={index === 0 ? "sync" : "async"}
                    fetchPriority={index === 0 ? "high" : "low"}
                    draggable="false"
                  />
                  {/* Whole-banner link for the desktop layout, where the HTML copy is hidden. */}
                  <Link
                    className="hero-slide__banner-link"
                    to={slide.cta.to}
                    aria-label={`${slide.cta.label}: ${slide.title}`}
                    draggable="false"
                  />
                </div>

                <div className="hero-slide__content">
                  <p className="hero-slide__eyebrow">{slide.eyebrow}</p>
                  <p className="hero-slide__title">{slide.title}</p>
                  <p className="hero-slide__text">{slide.text}</p>
                  <ul className="hero-slide__chips" aria-label="Highlights">
                    {slide.chips.map((chip) => (
                      <li key={chip}>{chip}</li>
                    ))}
                  </ul>
                  <div className="hero-slide__actions">
                    <Link className="mfx-btn mfx-btn--primary" to={slide.cta.to}>
                      {slide.cta.label} <FaArrowRight aria-hidden="true" />
                    </Link>
                    <Link className="mfx-btn mfx-btn--outline-light" to={slide.secondary.to}>
                      {slide.secondary.label}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="hero-carousel__dots">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={`hero-carousel__dot${index === currentIndex ? " is-active" : ""}`}
            onClick={() => goToSlide(index, true)}
            aria-label={`Show slide ${index + 1}: ${slide.title}`}
            aria-current={index === currentIndex ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
