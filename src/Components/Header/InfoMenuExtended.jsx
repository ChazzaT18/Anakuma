import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const InfoMenuExtended = ({ setCurrentPage, currentPage, infoMenuVisible }) => {
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

  return (
    <div className={`info-menu ${infoMenuVisible ? "visible" : ""}`}>
      <div className="info-menu-content">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "inherit",
            paddingLeft: "0.5vh",
            paddingRight: "0.5vh",
            borderBottom:
              currentPage === "home"
                ? "0.6vh solid white"
                : "0.6vh solid #00000000",
          }}
        >
          HOME
        </Link>
        <Link
          to="/menu"
          style={{
            textDecoration: "none",
            color: "inherit",
            paddingLeft: "0.5vh",
            paddingRight: "0.5vh",
            borderBottom:
              currentPage === "menu"
                ? "0.6vh solid white"
                : "0.6vh solid #00000000",
          }}
        >
          MENU
        </Link>
        <Link
          to="/find-us"
          style={{
            textDecoration: "none",
            color: "inherit",
            paddingLeft: "0.5vh",
            paddingRight: "0.5vh",
            borderBottom:
              currentPage === "find-us"
                ? "0.6vh solid white"
                : "0.6vh solid #00000000",
          }}
        >
          FIND US
        </Link>
        <Link
          to="/contact-us"
          style={{
            textDecoration: "none",
            color: "inherit",
            paddingLeft: "0.5vh",
            paddingRight: "0.5vh",
            borderBottom:
              currentPage === "contact-us"
                ? "0.6vh solid white"
                : "0.6vh solid #00000000",
          }}
        >
          GET IN TOUCH
        </Link>
        <Link
          to="/about-us"
          style={{
            textDecoration: "none",
            color: "inherit",
            paddingLeft: "0.5vh",
            paddingRight: "0.5vh",
            borderBottom:
              currentPage === "about-us"
                ? "0.6vh solid white"
                : "0.6vh solid #00000000",
          }}
        >
          ABOUT US
        </Link>
        <div className="halisco-container">
          <a
            target="_blank"
            className="halisco-link"
            href="https://www.halisco-brighton.co.uk/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            HALISCO
          </a>
          <img className="halisco-logo" src="/Images/halisco-skull-logo.png" />
        </div>
      </div>
    </div>
  );
};

export default InfoMenuExtended;
