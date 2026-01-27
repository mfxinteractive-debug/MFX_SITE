import React from 'react';
import './PrivacyPolicy.css';
import { FaShieldAlt, FaUserLock, FaEnvelope, FaPhoneAlt, FaDatabase, FaTrash } from 'react-icons/fa';

function PrivacyPolicy() {
  return (
    <section className="privacy-policy">
      {/* Hero Section */}
      <div className="privacy-hero">
        <div className="privacy-hero-content">
          <h1>Privacy Policy</h1>
          <p className="hero-description">
            At MFX Interactive Pvt. Ltd., we value your privacy and are committed to protecting your personal information. 
            This policy explains how we collect, use, and safeguard your data.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="privacy-container">
        <div className="privacy-content">
          {/* Introduction */}
          <div className="policy-section">
            <h2>Introduction</h2>
            <p>
              This Privacy Policy applies to MFX Interactive Pvt. Ltd. ("we," "our," or "us") and outlines our practices 
              regarding the collection, use, and disclosure of your information when you use our website or contact us.
            </p>
          </div>

          {/* What We Collect */}
          <div className="policy-section highlight-section">
            <div className="section-header">
              <FaDatabase className="section-icon" />
              <h2>Information We Collect</h2>
            </div>
            <p>We collect minimal personal information only when you voluntarily provide it:</p>
            <div className="info-grid">
              <div className="info-item">
                <div className="info-icon">
                  <FaUserLock />
                </div>
                <div className="info-content">
                  <h3>Contact Information</h3>
                  <p>Name, email address, and mobile number when you fill our contact form</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div className="info-content">
                  <h3>Communication Data</h3>
                  <p>Messages and inquiries you send us via email or WhatsApp</p>
                </div>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="policy-section">
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect solely for the following purposes:</p>
            <ul className="usage-list">
              <li>To respond to your inquiries and provide requested information</li>
              <li>To prepare and send quotations for our products</li>
              <li>To provide customer support and after-sales service</li>
              <li>To communicate about orders and shipments</li>
              <li>To improve our products and services</li>
            </ul>
          </div>

          {/* Data Protection */}
          <div className="policy-section highlight-section">
            <div className="section-header">
              <FaShieldAlt className="section-icon" />
              <h2>Data Protection & Security</h2>
            </div>
            <div className="protection-grid">
              <div className="protection-item">
                <h3>Limited Access</h3>
                <p>Only authorized personnel have access to your information</p>
              </div>
              <div className="protection-item">
                <h3>Secure Storage</h3>
                <p>Data is stored on secure servers with basic encryption</p>
              </div>
              <div className="protection-item">
                <h3>No Unnecessary Sharing</h3>
                <p>We do not sell, trade, or rent your personal information</p>
              </div>
              <div className="protection-item">
                <h3>Limited Retention</h3>
                <p>We retain data only as long as necessary for business purposes</p>
              </div>
            </div>
          </div>

          {/* Data Retention */}
          <div className="policy-section">
            <h2>Data Retention</h2>
            <p>
              We retain your personal information for <strong>6 months</strong> after our last communication, 
              unless a longer retention period is required by law or necessary for ongoing business relationships.
            </p>
          </div>

          {/* Your Rights */}
          <div className="policy-section">
            <div className="section-header">
              <FaTrash className="section-icon" />
              <h2>Your Rights</h2>
            </div>
            <p>You have the right to:</p>
            <ul className="rights-list">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of any inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Withdraw consent for data processing</li>
              <li>Lodge a complaint with relevant authorities</li>
            </ul>
          </div>

          {/* Third-Party Services */}
          <div className="policy-section">
            <h2>Third-Party Services</h2>
            <p>
              We use minimal third-party services for essential business operations:
            </p>
            <div className="third-party-list">
              <div className="service-item">
                <strong>Email Service:</strong> For communication (Gmail/Outlook)
              </div>
              <div className="service-item">
                <strong>Website Hosting:</strong> For website operation
              </div>
              <div className="service-item">
                <strong>WhatsApp Business:</strong> For customer communication
              </div>
            </div>
            <p className="note">
              Note: We ensure these services have adequate privacy protections.
            </p>
          </div>

          {/* Cookies */}
          <div className="policy-section highlight-section">
            <h2>Cookies & Tracking</h2>
            <p>
              Our website uses minimal or no cookies. If we implement analytics in the future, 
              we will update this policy and provide opt-out options.
            </p>
          </div>

          {/* Contact for Privacy Concerns */}
          <div className="policy-section contact-section">
            <h2>Contact Us for Privacy Concerns</h2>
            <p>For any questions about this Privacy Policy or to exercise your rights:</p>
            {/* <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <p>info@mfxinteractive.com</p>
                </div>
              </div>
              <div className="contact-item">
                <FaPhoneAlt className="contact-icon" />
                <div>
                  <h4>Phone</h4>
                  <p>+91 6292004104</p>
                </div>
              </div>
            </div>
            <p className="response-time">
              We aim to respond to all privacy-related inquiries within 48 hours.
            </p> */}
          </div>

          {/* Policy Updates */}
          {/* <div className="policy-section">
            <h2>Policy Updates</h2>
            <p>
              We may update this Privacy Policy periodically. The latest version will always be posted on this page 
              with the effective date. We encourage you to review this policy regularly.
            </p>
            <p className="effective-date">
              <strong>Effective Date:</strong> January 15, 2024
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;