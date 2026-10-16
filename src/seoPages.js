// Per-route SEO metadata, shared by the app (Seo.jsx) and the build-time
// prerender step in vite.config.js. Plain JS so Node can import it directly.
// An optional `jsonLd` object is written into that page's static HTML head.

import { faqs } from "./content/faqs.js";

export const SITE_URL = "https://mfxinteractive.com";
const BRAND = "MFX Interactive";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export const pages = {
  "/": {
    title: "MFX Interactive | Touch Screen Displays, LED Screens & Digital Signage in Kolkata",
    description:
      "MFX Interactive (MULTIFX) designs and supplies interactive touch screen displays, indoor and outdoor LED screens, outdoor digital signage and AI kiosks for retail, education, hospitality and corporate spaces across India.",
  },
  "/about": {
    title: `About Us | ${BRAND}`,
    description:
      "MULTIFX, from the house of TAAZATV, brings 12+ years of expertise in touchscreen technology, AV integration and interactive display solutions.",
  },
  "/touch-screen-display": {
    title: `Touch Screen Displays | ${BRAND}`,
    description:
      "Interactive touch screen displays, standees, kiosks, tables and flat panels with OS support and high brightness for corporate, education and retail use.",
  },
  "/indoor-led": {
    title: `Indoor LED Displays | ${BRAND}`,
    description:
      "High-resolution indoor LED displays, from fine-pitch to large format, with superior image quality and energy efficiency for boardrooms, retail and events.",
  },
  "/outdoor-led": {
    title: `Outdoor LED Displays | ${BRAND}`,
    description:
      "Weather-resistant, high-brightness outdoor LED screens for advertising, stadiums and public information displays.",
  },
  "/outdoor-digital-displays": {
    title: `Outdoor Digital Displays | ${BRAND}`,
    description:
      "Durable, weatherproof outdoor digital signage and display solutions with superior visibility for advertising and information.",
  },
  "/ai-kiosks": {
    title: `AI Kiosks | ${BRAND}`,
    description:
      "AI-powered interactive kiosks with facial recognition, voice assistance and analytics for smart retail and customer engagement.",
  },
  "/services": {
    title: `Services | ${BRAND}`,
    description:
      "Web and software development plus touch interactive content development for education, corporate, retail and museum displays.",
  },
  "/contact": {
    title: `Contact Us | ${BRAND}`,
    description:
      "Get in touch with MFX Interactive in Kolkata for quotes, demos and support on touch screens, LED displays and kiosks. Call +91 6292004104.",
  },
  "/service-and-support": {
    title: `Service & Support | ${BRAND}`,
    description:
      "OEM services, warranty, shipment, samples and after-sales support for MFX Interactive display products.",
  },
  "/touch-screen-display-kolkata": {
    title: `Touch Screen Display Supplier in Kolkata | ${BRAND}`,
    description:
      "Kolkata-based supplier of interactive touch screen displays, touch kiosks, digital standees, interactive flat panels and LED walls, with installation, warranty and local support. Call +91 6292004104.",
  },
  "/our-work": {
    title: `Our Work: Installations in Kolkata | ${BRAND}`,
    description:
      "Digital standees, interactive touch tables and kiosks installed by MFX Interactive for ITC Sonar, ITC Royal Bengal, The Spring Club, Tutopia, Merlin and Natural Group.",
  },
  "/faq": {
    title: `FAQ: Touch Screens, Kiosks & Digital Signage | ${BRAND}`,
    description:
      "Answers on touch screen sizes, pricing, installation, warranty, support, operating systems and ordering from MFX Interactive, Kolkata.",
    jsonLd: faqJsonLd,
  },
  "/privacy-policy": {
    title: `Privacy Policy | ${BRAND}`,
    description: "How MFX Interactive Pvt. Ltd. collects, uses and protects your personal information.",
  },
};
