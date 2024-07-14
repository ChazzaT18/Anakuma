import React, { useState, useEffect } from "react";

const MobileBookingButton = ({ MobileMenuVisible, setMobileMenuVisible }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isPortrait, setIsPortrait] = useState(
    window.innerWidth < window.innerHeight
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsPortrait(window.innerWidth < window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); 

  return isPortrait ? (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://booking.favouritetable.com/?SiteCode=1931"
      className={`mobile-booking-button ${MobileMenuVisible ? "mobile-booking-button-visible" : ""}`}
    >
      BOOK A TABLE
    </a>
  ) : null;
};

export default MobileBookingButton;
