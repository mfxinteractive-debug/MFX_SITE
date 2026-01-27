import React from 'react';
import './ServiceSupport.css';
import { FaPhoneAlt, FaEnvelope, FaShippingFast, FaClipboardCheck, FaHeadset, FaVideo, FaHandshake, FaShieldAlt, FaTools } from 'react-icons/fa';

function ServiceSupport() {
  const services = [
    {
      icon: <FaTools />,
      title: "1. OEM Services",
      content: "MFX Interactive Pvt. Ltd. can tailor designs to meet your requirements. With strong design capabilities and extensive experience in the OEM & ODM industry, we can customize your product without difficulty. We also provide comprehensive suggestions on parts installation."
    },
    {
      icon: <FaShieldAlt />,
      title: "2. Warranty",
      content: "MULTIFX is dedicated to providing the most cost-effective products and services with the highest quality to ensure customer satisfaction. Our standard warranty is 12 months from the date of shipment, with some designated models offering warranties of up to 24 months. For mass orders, we can supply spare parts for local repair, and you can return defective parts for rework."
    },
    {
      icon: <FaClipboardCheck />,
      title: "3. Payment Terms",
      content: "For orders, full advance payments can be made via NEFT / Cheque"
    },
    {
      icon: <FaShippingFast />,
      title: "4. Shipment",
      content: "We accept all types of shipping methods, including express, air, sea, car, or personal pickup by customers."
    },
    {
      icon: <FaHandshake />,
      title: "5. Sample Availability & Policy",
      content: "Once customers confirm our specifications, we are happy to provide samples for testing and qualification. All samples must be paid for before shipment, and the sample price is slightly higher than that of mass orders. When a mass order is placed, we can refund the sample cost or include additional products with the shipment. Sample orders payments must be placed before we release them to our factory."
    },
    {
      icon: <FaHeadset />,
      title: "6. After-sales Service",
      content: `• All products come with a warranty of no less than one year, with some models offering up to two years.
• Spare parts will be provided for mass orders for local maintenance.
• We have distributors or authorized agents in major markets who can offer local repair and replacement services.
• Our professional CRM management ensures fast responses to customer inquiries and order tracking.
• Our sales team has years of experience in foreign trade, is proficient in foreign languages, and has a strong sense of responsibility.
• We offer 24/7 online support, with responses within four hours on working days and within 12 hours on weekends.`
    },
    {
      icon: <FaVideo />,
      title: "7. Video Guide",
      content: "To help customers use our products effectively, we have recorded and uploaded video guides."
    },
    {
      title: "8. MOQ Policy",
      content: "There is no MOQ limitation for standard products, although the unit price varies. For customized production, the price is slightly higher than for standard products."
    },
    {
      title: "9. Request a Quote and After-sales support",
      content: "To request a quote, please contact us at: info@mfxinteractive.com"
    }
  ];

  return (
    <section className="service-support">
      {/* Hero Section */}
      <div className="service-hero">
        <div className="service-hero-content">
          <h1>Service & Support</h1>
          <p className="hero-description">
            We're aware that you have choices about where to buy your technology, and we believe we're the best choice. 
            Our products are superior because we stand behind them and offer exceptional support. We understand that 
            technology can be daunting, so we provide various services to help your self-service or digital project succeed.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="service-container">
        <div className="service-content">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-header">
                {service.icon && <span className="service-icon">{service.icon}</span>}
                <h2 className="service-title">{service.title}</h2>
              </div>
              <div className="service-body">
                {service.content.split('\n').map((line, i) => (
                  <p key={i} className="service-text">
                    {line.trim()}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

     
      </div>
    </section>
  );
}

export default ServiceSupport;