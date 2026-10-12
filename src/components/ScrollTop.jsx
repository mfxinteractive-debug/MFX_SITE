// components/ScrollToTop/ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // Jump straight to the top of the new page
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;