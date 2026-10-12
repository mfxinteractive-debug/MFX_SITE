import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import img1 from "../../assets/Installations/ITC_Royal.avif";
import img3 from "../../assets/Installations/Merlin.avif";
import img4 from "../../assets/Installations/Naturals_Group.avif";
import img5 from "../../assets/Installations/Tutopia.avif";
import img6 from "../../assets/Installations/SpringClub.jpeg";
import img7 from "../../assets/Installations/itc_sonar.jpeg";
import Dialog from "../Dialog/Dialog";

import "./OurInstallations.css";

const slides = [
  { src: img1, title: "ITC Royal Bengal", width: 900, height: 491 },
  // { src: img2, title: "Melorra" },
  { src: img3, title: "Merlin", width: 940, height: 513 },
  { src: img4, title: "Natural Group", width: 940, height: 513 },
  { src: img5, title: "Tutopia", width: 940, height: 513 },
  { src: img6, title: "The Spring Club", width: 1600, height: 1200 },
  { src: img7, title: "ITC Sonar Bengal", width: 1280, height: 720 },
];

/*
 * Horizontal "rail" carousel: a native scroll-snap strip whose first card lines
 * up with the page content while the strip bleeds to the viewport edges.
 * Touch swipe and momentum come from native scrolling; mouse users can drag
 * or use the chevrons.
 */
function Installations() {
  const [zoomIndex, setZoomIndex] = useState(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [nearViewport, setNearViewport] = useState(false);
  const sectionRef = useRef(null);
  const railRef = useRef(null);
  const listRef = useRef(null);
  const drag = useRef(null);
  const suppressClick = useRef(false);

  const updateEdges = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    setAtStart(rail.scrollLeft <= 2);
    setAtEnd(rail.scrollLeft >= rail.scrollWidth - rail.clientWidth - 2);
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [updateEdges]);

  // Off-screen cards sit inside the scroller, where native lazy-loading would
  // only fetch them mid-swipe; load them all as the section approaches instead.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !("IntersectionObserver" in window)) {
      setNearViewport(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Scroll positions where each card's left edge meets the content edge.
  const snapPoints = () => {
    const list = listRef.current;
    const inset = parseFloat(getComputedStyle(list).paddingLeft) || 0;
    return [...list.children].map((item) => item.offsetLeft - inset);
  };

  const scrollToCard = (direction) => {
    const rail = railRef.current;
    const points = snapPoints();
    const current = rail.scrollLeft;
    const target =
      direction > 0
        ? points.find((point) => point > current + 2)
        : [...points].reverse().find((point) => point < current - 2);
    rail.scrollTo({ left: target ?? (direction > 0 ? rail.scrollWidth : 0), behavior: "smooth" });
  };

  // Mouse drag (touch already scrolls natively).
  const handlePointerDown = (event) => {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    drag.current = { x: event.clientX, left: railRef.current.scrollLeft, moved: false };
  };

  const handlePointerMove = (event) => {
    if (!drag.current) return;
    const dx = event.clientX - drag.current.x;
    if (!drag.current.moved && Math.abs(dx) > 5) {
      drag.current.moved = true;
      railRef.current.classList.add("is-dragging");
      railRef.current.setPointerCapture(event.pointerId);
    }
    if (drag.current.moved) railRef.current.scrollLeft = drag.current.left - dx;
  };

  const handlePointerUp = () => {
    if (!drag.current) return;
    const { moved } = drag.current;
    drag.current = null;
    if (!moved) return;
    suppressClick.current = true;
    const rail = railRef.current;
    rail.classList.remove("is-dragging");
    // Settle on the nearest card.
    const nearest = snapPoints().reduce((best, point) =>
      Math.abs(point - rail.scrollLeft) < Math.abs(best - rail.scrollLeft) ? point : best
    );
    rail.scrollTo({ left: nearest, behavior: "smooth" });
  };

  const openCard = (index) => {
    if (suppressClick.current) {
      suppressClick.current = false;
      return;
    }
    setZoomIndex(index);
  };

  const zoomed = zoomIndex === null ? null : slides[zoomIndex];

  return (
    <section className="installations-section" aria-labelledby="installations-heading" ref={sectionRef}>
      <div className="installations-header mfx-container">
        <p className="mfx-eyebrow">Case studies</p>
        <h2 id="installations-heading">Our Installations</h2>
        <p className="header-subtitle">Premium digital display solutions brought to life</p>
      </div>

      <div
        ref={railRef}
        className="inst-rail"
        role="region"
        aria-roledescription="carousel"
        aria-label="Installation photos"
        tabIndex={0}
        onScroll={updateEdges}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <ul ref={listRef} className="inst-rail__list">
          {slides.map((slide, index) => (
            <li
              key={slide.title}
              className="inst-card"
              style={{ "--ar": (slide.width / slide.height).toFixed(4) }}
            >
              <button
                type="button"
                className="inst-card__media"
                onClick={() => openCard(index)}
                aria-label={`View ${slide.title} full size`}
              >
                <img
                  src={slide.src}
                  alt={`${slide.title} installation`}
                  width={slide.width}
                  height={slide.height}
                  loading={nearViewport ? "eager" : "lazy"}
                  decoding="async"
                  draggable="false"
                />
              </button>
              <p className="inst-card__title">{slide.title}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="inst-rail__nav mfx-container">
        <button type="button" onClick={() => scrollToCard(-1)} disabled={atStart} aria-label="Previous installations">
          <FaChevronLeft aria-hidden="true" />
        </button>
        <button type="button" onClick={() => scrollToCard(1)} disabled={atEnd} aria-label="Next installations">
          <FaChevronRight aria-hidden="true" />
        </button>
      </div>

      {zoomed && (
        <Dialog title={zoomed.title} onClose={() => setZoomIndex(null)} className="inst-lightbox" hideTitle>
          <button type="button" className="inst-lightbox__close" onClick={() => setZoomIndex(null)} aria-label="Close image">
            <FaTimes aria-hidden="true" />
          </button>
          <img
            src={zoomed.src}
            alt={`${zoomed.title} installation`}
            className="inst-lightbox__img"
            width={zoomed.width}
            height={zoomed.height}
          />
          <p className="inst-lightbox__caption">{zoomed.title}</p>
        </Dialog>
      )}
    </section>
  );
}

export default Installations;
