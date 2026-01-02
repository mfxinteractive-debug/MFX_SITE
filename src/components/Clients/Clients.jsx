import React from 'react';
import './Clients.css';

function Clients() {
  // Array of client logo filenames
  const clientLogos = [
    'ambuja.jpg',
    'big cup.jpeg',
  ];

  // Duplicate the array to create a seamless loop
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="clients-section">
      <div className="container">
        <h2 className="clients-title">Our Valued Clients</h2>
        <p className="clients-subtitle">Trusted by industry leaders</p>
        
        <div className="ticker-container">
          <div className="ticker-track">
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="ticker-item">
                <img 
                  src={`${process.env.PUBLIC_URL}/clients/${logo}`} 
                  alt="Client logo" 
                  className="client-logo"
                  onError={(e) => {
                    console.error(`Failed to load image: ${logo}`);
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="ticker-container reverse">
          <div className="ticker-track reverse">
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="ticker-item">
                <img 
                  src={`${process.env.PUBLIC_URL}/clients/${logo}`} 
                  alt="Client logo" 
                  className="client-logo"
                  onError={(e) => {
                    console.error(`Failed to load image: ${logo}`);
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;