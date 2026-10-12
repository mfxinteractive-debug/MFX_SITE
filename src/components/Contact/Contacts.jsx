import React, { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./Contacts.css";

function ContactPage({ titleAs = "h1" }) {
  const Title = titleAs;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // Added for error handling

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(""); // Clear previous errors

    emailjs
      .sendForm(
        "service_dzmbnre",
        "template_blzwif7", // Replace with your EmailJS Template ID
        e.target,
        "jFAaoSJjicJsJtw-w" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Form submitted successfully:", result.text);
          setIsSubmitting(false);
          setIsSubmitted(true);
          setFormData({ name: "", email: "", phone: "", message: "" });
          setTimeout(() => setIsSubmitted(false), 4000);
        },
        (error) => {
          console.error("Form submission error:", error.text);
          setIsSubmitting(false);
          setErrorMessage("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section className="mfx-contact-page" aria-labelledby="contact-heading">
      <div className="mfx-contact-container mfx-container">
        <div className="mfx-contact-header">
          <p className="mfx-eyebrow">Contact us</p>
          <Title className="mfx-contact-title" id="contact-heading">Get In Touch</Title>
          <p className="mfx-contact-subtitle">
            Have questions or need assistance? We're here to help you bring your digital vision to life.
          </p>
        </div>
        <div className="mfx-contact-content">
          {/* Left Section */}
          <div className="mfx-contact-info-section">
            <div className="mfx-contact-card">
              <h2>Contact Information</h2>
              <p className="mfx-company-description">
                We specialize in innovative digital display solutions including LED screens, touch kiosks, and interactive displays.
              </p>
              <div className="mfx-contact-details">
                <div className="mfx-contact-item">
                  <div className="mfx-contact-icon" aria-hidden="true">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3>Our Location</h3>
                    <p>1, Shakespeare Sarani, 6th Flr, AC Market (Back Gate)</p>
                    <p>Kolkata 700017, West Bengal, India</p>
                  </div>
                </div>
                <div className="mfx-contact-item">
                  <div className="mfx-contact-icon" aria-hidden="true">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3>Email Address</h3>
                    <a href="mailto:info@mfxinteractive.com">info@mfxinteractive.com</a>
                    <p>Response within 24 hours</p>
                  </div>
                </div>
                <div className="mfx-contact-item">
                  <div className="mfx-contact-icon" aria-hidden="true">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h3>Phone Number</h3>
                    <a href="tel:+916292004104">+91 6292004104</a>
                    <a href="tel:+918697892496">+91 8697892496</a>
                    <p>Mon-Fri: 9AM - 6PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Form Section */}
          <div className="mfx-form-section">
            <div className="mfx-form-card">
              <h2>Send Us a Message</h2>
              <p className="mfx-form-intro">Fill out the form below and we'll get back to you as soon as possible.</p>
              <form onSubmit={handleSubmit} className="mfx-contact-form">
                <div className="mfx-form-row">
                  <div className="mfx-form-group">
                    <label htmlFor="contact-name">Full Name *</label>
                    <input id="contact-name" type="text" name="name" autoComplete="name" value={formData.name} placeholder="Enter Your Name" onChange={handleChange} required />
                  </div>
                  <div className="mfx-form-group">
                    <label htmlFor="contact-email">Email Address *</label>
                    <input id="contact-email" type="email" name="email" autoComplete="email" inputMode="email" value={formData.email} placeholder="email@example.com" onChange={handleChange} required />
                  </div>
                </div>
                <div className="mfx-form-group">
                  <label htmlFor="contact-phone">Phone Number</label>
                  <input id="contact-phone" type="tel" name="phone" autoComplete="tel" value={formData.phone} placeholder="+91 9876543210" onChange={handleChange} />
                </div>
                <div className="mfx-form-group">
                  <label htmlFor="contact-message">Your Message *</label>
                  <textarea id="contact-message" name="message" value={formData.message} rows="5" placeholder="Tell us about your project requirements..." onChange={handleChange} required></textarea>
                </div>
                <div className="mfx-form-footer">
                  <p className="mfx-required-note">* Required fields</p>
                  <button type="submit" className="mfx-submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <span className="mfx-spinner" aria-hidden="true" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="mfx-btn-icon" aria-hidden="true" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
                <div aria-live="polite">
                {isSubmitted && (
                  <div className="mfx-success-message" role="status">
                    <div className="mfx-success-icon" aria-hidden="true">✓</div>
                    <div>
                      <p className="mfx-success-title">Message Sent Successfully!</p>
                      <p>Thank you for contacting us. We'll get back to you soon.</p>
                    </div>
                  </div>
                )}
                {errorMessage && (
                  <div className="mfx-error-message" role="alert">
                    <p>{errorMessage}</p>
                  </div>
                )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ContactPage; 
