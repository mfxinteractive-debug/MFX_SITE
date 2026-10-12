// Per-route <title>, description and canonical URL. Google renders the app,
// so distinct page titles let it list the site's sections (sitelinks).
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://mfxinteractive.com";
const BRAND = "MFX Interactive";

const pages = {
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
  "/privacy-policy": {
    title: `Privacy Policy | ${BRAND}`,
    description: "How MFX Interactive Pvt. Ltd. collects, uses and protects your personal information.",
  },
};

const setMeta = (selector, attribute, value) => {
  const element = document.head.querySelector(selector);
  if (element) element.setAttribute(attribute, value);
};

function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = pages[pathname] ?? pages["/"];
    const url = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;

    document.title = page.title;
    setMeta('meta[name="description"]', "content", page.description);
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:title"]', "content", page.title);
    setMeta('meta[property="og:description"]', "content", page.description);
    setMeta('meta[property="og:url"]', "content", url);
  }, [pathname]);

  return null;
}

export default Seo;
