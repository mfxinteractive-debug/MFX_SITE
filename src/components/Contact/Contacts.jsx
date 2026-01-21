import React, { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./Contacts.css";

function ContactPage() {
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
    <div className="mfx-contact-page">
      <div className="mfx-bg-shape-1"></div>
      <div className="mfx-bg-shape-2"></div>
      <div className="mfx-contact-container">
        <div className="mfx-contact-header">
          <h1 className="mfx-contact-title">Get In Touch</h1>
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
                  <div className="mfx-contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4>Our Location</h4>
                    <p>37, Shakespeare Sarani</p>
                    <p>Kolkata 700017, West Bengal, India</p>
                  </div>
                </div>
                <div className="mfx-contact-item">
                  <div className="mfx-contact-icon">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4>Email Address</h4>
                    <a href="mailto:info@mfxinteractive.com">info@mfxinteractive.com</a>
                    <p>Response within 24 hours</p>
                  </div>
                </div>
                <div className="mfx-contact-item">
                  <div className="mfx-contact-icon">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4>Phone Number</h4>
                    <a href="tel:+916292004104">+91 6292004104</a>
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
                    <label>Full Name *</label>
                    <input type="text" name="name" value={formData.name} placeholder="John Doe" onChange={handleChange} required />
                  </div>
                  <div className="mfx-form-group">
                    <label>Email Address *</label>
                    <input type="email" name="email" value={formData.email} placeholder="john@example.com" onChange={handleChange} required />
                  </div>
                </div>
                <div className="mfx-form-group">
                  <label>Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} placeholder="+91 9876543210" onChange={handleChange} />
                </div>
                <div className="mfx-form-group">
                  <label>Your Message *</label>
                  <textarea name="message" value={formData.message} rows="5" placeholder="Tell us about your project requirements..." onChange={handleChange} required></textarea>
                </div>
                <div className="mfx-form-footer">
                  <p className="mfx-required-note">* Required fields</p>
                  <button type="submit" className="mfx-submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="mfx-spinner">Sending...</span>
                    ) : (
                      <>
                        <FaPaperPlane className="mfx-btn-icon" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
                {isSubmitted && (
                  <div className="mfx-success-message">
                    <div className="mfx-success-icon">✓</div>
                    <div>
                      <h4>Message Sent Successfully!</h4>
                      <p>Thank you for contacting us. We'll get back to you soon.</p>
                    </div>
                  </div>
                )}
                {errorMessage && (
                  <div className="mfx-error-message">
                    <p>{errorMessage}</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactPage; 