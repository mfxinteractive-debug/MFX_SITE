import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SocialIcons from "./components/SocialIcons/SocialIcons";
import LandingPage from "./components/LandingPage/LandingPage";
import OurInstallations from "./components/OurInstallations/OurInstallations";
import Sponsors from "./components/Sponsors/Sponsors";
import Contacts from "./components/Contact/Contacts";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import TouchScreens from "./components/Screens/TouchScreen";
import Outdoor from "./components/Screens/Outdoor";
import Indoor from "./components/Screens/Indoor";
import Aikiosk from "./components/Screens/Aikiosk";
import Services from "./components/Services/Services";
import SliderPage from "./components/SliderPage/SliderPage";
import Outdoor_Digital_Display from "./components/Screens/Outdoor_Digital_Display"
import ScrollToTop from "./components/ScrollTop"; // Import ScrollToTop

function App() {
  return (
    <>
      <Navbar />
      <SocialIcons />
      <ScrollToTop /> {/* Add this */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SliderPage />
              <LandingPage />
              <OurInstallations />
              <Sponsors />
              <Contacts />
            </>
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/services" element={<Services />} />
        <Route path="/touch-screen-display" element={<TouchScreens />} />
        <Route path="/outdoor-led" element={<Outdoor />} />
        <Route path="/indoor-led" element={<Indoor />} />
        <Route path="/ai-kiosks" element={<Aikiosk />} />
        <Route path="/outdoor-digital-displays" element={<Outdoor_Digital_Display/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;