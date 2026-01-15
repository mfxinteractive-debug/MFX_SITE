import React from 'react';
import './Sponsors.css';

import khushiRealcon from '../../assets/sponsors/khushi_realcon.avif';
import ambujaNeotia from '../../assets/sponsors/ambuja-neotia.avif';
import bigCup from '../../assets/sponsors/big_cup.avif';
import birlaHigh from '../../assets/sponsors/birla_high.avif';
import brc from '../../assets/sponsors/brc.avif';
import camacClub from '../../assets/sponsors/camac_club.avif';
import cosmo from '../../assets/sponsors/cosmo.avif';
import grid from '../../assets/sponsors/grid.avif';
import grse from '../../assets/sponsors/grse.avif';
import hindustanClub from '../../assets/sponsors/hindustan_club.avif';
import ilead from '../../assets/sponsors/ilead.avif';
import itcHotel from '../../assets/sponsors/itc_hotel.avif';
import jdBirla from '../../assets/sponsors/Jd_birla.avif';
import jis from '../../assets/sponsors/jis.avif';
import kazirang from '../../assets/sponsors/kazirang.avif';
import lynq from '../../assets/sponsors/lynq.avif';
import melorra from '../../assets/sponsors/Melorra.avif';
import merino from '../../assets/sponsors/merino.avif';
import merlinGroup from '../../assets/sponsors/merlin-group.avif';
import metroGroup from '../../assets/sponsors/metro_group.avif';
import natural from '../../assets/sponsors/natural.avif';
import newLogo from '../../assets/sponsors/new.avif';
import panna from '../../assets/sponsors/panna.avif';
import premiere from '../../assets/sponsors/Premiere.avif';
import radisson from '../../assets/sponsors/radisson.avif';
import rangoli from '../../assets/sponsors/rangoli.avif';
import sembcrop from '../../assets/sponsors/sembcorp.avif';
import sitiNetwork from '../../assets/sponsors/siti_network.avif';
import surinder from '../../assets/sponsors/Surinder.avif';
import susilaBirla from '../../assets/sponsors/Susila_Birla.avif';
import tataTiscon from '../../assets/sponsors/tata_tiscon.avif';
import tutopia from '../../assets/sponsors/tutopia.avif';
import ualKonarl from '../../assets/sponsors/ual_konarl.avif';
import vigans from '../../assets/sponsors/vigans.avif';

const logos = [
  { src: khushiRealcon, name: 'Khushi Realcon' },
  { src: ambujaNeotia, name: 'Ambuja Neotia' },
  { src: bigCup, name: 'Big Cup' },
  { src: birlaHigh, name: 'Birla High' },
  { src: brc, name: 'BRC' },
  { src: camacClub, name: 'Camac Club' },
  { src: cosmo, name: 'Cosmo' },
  { src: grid, name: 'Grid' },
  { src: grse, name: 'GRSE' },
  { src: hindustanClub, name: 'Hindustan Club' },
  { src: ilead, name: 'Ilead' },
  { src: itcHotel, name: 'ITC Hotel' },
  { src: jdBirla, name: 'JD Birla' },
  { src: jis, name: 'JIS' },
  { src: kazirang, name: 'Kazirang' },
  { src: lynq, name: 'Lynq' },
  { src: melorra, name: 'Melorra' },
  { src: merino, name: 'Merino' },
  { src: merlinGroup, name: 'Merlin Group' },
  { src: metroGroup, name: 'Metro Group' },
  { src: natural, name: 'Natural' },
  { src: newLogo, name: 'New' },
  { src: panna, name: 'Panna' },
  { src: premiere, name: 'Premiere' },
  { src: radisson, name: 'Radisson' },
  { src: rangoli, name: 'Rangoli' },
  { src: sembcrop, name: 'Sembcorp' },
  { src: sitiNetwork, name: 'Siti Network' },
  { src: surinder, name: 'Surinder' },
  { src: susilaBirla, name: 'Susila Birla' },
  { src: tataTiscon, name: 'Tata Tiscon' },
  { src: tutopia, name: 'Tutopia' },
  { src: ualKonarl, name: 'UAL Konarl' },
  { src: vigans, name: 'Vigans' }
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
              <div className="stat-number" style={{ color: '#be2426' }}>35+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" style={{ color: '#042b30' }}>50+</div>
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