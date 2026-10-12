import React, { useEffect, useRef, useState } from 'react';
import './Sponsors.css';

const BASE_PATH = '/Clients';

const logos = [
  { src: `${BASE_PATH}/khushi_realcon.avif`, name: 'Khushi Realcon' },
  { src: `${BASE_PATH}/ambuja-neotia.avif`, name: 'Ambuja Neotia' },
  { src: `${BASE_PATH}/big_cup.avif`, name: 'Big Cup' },
  { src: `${BASE_PATH}/birla_high.avif`, name: 'Birla High' },
  { src: `${BASE_PATH}/brc.avif`, name: 'BRC' },
  { src: `${BASE_PATH}/camac_club.avif`, name: 'Camac Club' },
  { src: `${BASE_PATH}/cosmo.avif`, name: 'Cosmo' },
  { src: `${BASE_PATH}/grid.avif`, name: 'Grid' },
  { src: `${BASE_PATH}/grse.avif`, name: 'GRSE' },
  { src: `${BASE_PATH}/hindustan_club.avif`, name: 'Hindustan Club' },
  { src: `${BASE_PATH}/ilead.avif`, name: 'Ilead' },
  { src: `${BASE_PATH}/itc_hotel.avif`, name: 'ITC Hotel' },
  { src: `${BASE_PATH}/Jd_birla.avif`, name: 'JD Birla' },
  { src: `${BASE_PATH}/jis.avif`, name: 'JIS' },
  { src: `${BASE_PATH}/kazirang.avif`, name: 'Kazirang' },
  { src: `${BASE_PATH}/lynq.avif`, name: 'Lynq' },
  { src: `${BASE_PATH}/Melorra.avif`, name: 'Melorra' },
  { src: `${BASE_PATH}/merino.avif`, name: 'Merino' },
  { src: `${BASE_PATH}/merlin-group.avif`, name: 'Merlin Group' },
  { src: `${BASE_PATH}/metro_group.avif`, name: 'Metro Group' },
  { src: `${BASE_PATH}/natural.avif`, name: 'Natural' },
  { src: `${BASE_PATH}/new.avif`, name: 'New' },
  { src: `${BASE_PATH}/panna.avif`, name: 'Panna' },
  { src: `${BASE_PATH}/Premiere.avif`, name: 'Premiere' },
  { src: `${BASE_PATH}/radisson.avif`, name: 'Radisson' },
  { src: `${BASE_PATH}/rangoli.avif`, name: 'Rangoli' },
  { src: `${BASE_PATH}/sembcorp.avif`, name: 'Sembcorp' },
  { src: `${BASE_PATH}/siti_network.avif`, name: 'Siti Network' },
  { src: `${BASE_PATH}/Surinder.avif`, name: 'Surinder' },
  { src: `${BASE_PATH}/Susila_Birla.avif`, name: 'Susila Birla' },
  { src: `${BASE_PATH}/tata_tiscon.avif`, name: 'Tata Tiscon' },
  { src: `${BASE_PATH}/tutopia.avif`, name: 'Tutopia' },
  { src: `${BASE_PATH}/ual_konarl.avif`, name: 'UAL Konarl' },
  { src: `${BASE_PATH}/vigans.avif`, name: 'Vigans' },
  { src: `${BASE_PATH}/flexi.webp`, name: 'Flexi' },
  { src: `${BASE_PATH}/bp.png`, name: 'BP' },

];

const stats = [
  { value: '100+', label: 'Happy Clients' },
  { value: '150+', label: 'Projects Delivered' },
  { value: '10+', label: 'Years Experience' },
  { value: '100%', label: 'Satisfaction Rate' },
];

function Sponsors() {
  // Logos sit in a horizontally clipped track where native lazy-loading never
  // fires until each one scrolls into view, so load them all once the section
  // approaches the viewport instead.
  const sectionRef = useRef(null);
  const [nearViewport, setNearViewport] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !('IntersectionObserver' in window)) {
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
      { rootMargin: '600px 0px' }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="sponsors" aria-labelledby="sponsors-heading" ref={sectionRef}>
      <div className="sponsors-container mfx-container">
        <div className="sponsors-header">
          <p className="mfx-eyebrow">Our Clients</p>
          <h2 className="sponsors-title" id="sponsors-heading">
            Trusted by <span className="title-part-2">Industry Leaders</span>
          </h2>
          <p className="sponsors-description">
            We're proud to partner with renowned brands and organizations across various sectors,
            delivering innovative digital display solutions that drive engagement and results.
          </p>
        </div>
      </div>

      <div className="clients-marquee">
        <ul className="marquee-track" aria-label="Client logos">
          {/* The second copy only exists to make the loop seamless. */}
          {[0, 1].map((copy) =>
            logos.map((logo) => (
              <li key={`${copy}-${logo.src}`} className="marquee-item" aria-hidden={copy === 1 ? "true" : undefined}>
                <img
                  src={logo.src}
                  alt={copy === 1 ? "" : logo.name}
                  className="marquee-logo"
                  loading={nearViewport ? 'eager' : 'lazy'}
                  decoding="async"
                />
              </li>
            ))
          )}
        </ul>
      </div>

      <div className="mfx-container">
        <dl className="stats-section">
          {stats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <dt className="stat-label">{stat.label}</dt>
              <dd className="stat-number">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default Sponsors;
