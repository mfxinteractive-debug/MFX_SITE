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
import ProductPage from "./components/Products/Products";
import Services from "./components/Services/Services";
import TouchScreen from "./components/TouchScreen/TouchScreen"
import SliderPage from "./components/SliderPage/SliderPage";
function App() {
  return (
    <>
      <Navbar />
      {/* <SocialIcons /> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
           <SliderPage/>
              <LandingPage />
              <OurInstallations />
              <Sponsors />
              <Contacts />
            </>
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contacts />} />
        {/* <Route path="/products" element={<ProductPage/>} /> */}
        <Route path="/services" element={<Services/>} />
        <Route path="/touch-screen-display" element={<TouchScreen/>} />


      </Routes>
      <Footer />
    </>
  );
}

export default App;
