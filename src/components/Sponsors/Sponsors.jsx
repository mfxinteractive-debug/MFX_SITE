import React from 'react';
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
  { src: `${BASE_PATH}/bp.png`, name: 'bp``' },
  { src: `${BASE_PATH}/ual_konarl.avif`, name: 'UAL Konarl' },
  { src: `${BASE_PATH}/ual_konarl.avif`, name: 'UAL Konarl' },

];

function Sponsors() {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="sponsors">
      <div className="sponsors-container">
        <div className="sponsors-header">
          <div className="section-label">
            <span className="label-text">OUR CLIENTS</span>
            <div className="label-line"></div>
          </div>
          <h2 className="sponsors-title">
            <span className="title-part-1">Trusted by </span>
            <span className="title-part-2">Industry Leaders</span>
          </h2>
          <p className="sponsors-description">
            We're proud to partner with renowned brands and organizations across various sectors,
            delivering innovative digital display solutions that drive engagement and results.
          </p>
        </div>

        <div className="clients-marquee">
          <div className="marquee-track">
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="marquee-item">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="marquee-logo"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="stats-section">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number" style={{ color: '#be2426' }}>100+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" style={{ color: '#042b30' }}>150+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" style={{ color: '#be2426' }}>10+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" style={{ color: '#042b30' }}>100%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
