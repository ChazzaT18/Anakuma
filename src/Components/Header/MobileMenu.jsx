import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import CurrentPageContext from "../../Context/CurrentPageContext";
import "../../../CSS/MobileMenu.css";

const MobileMenu = ({ MobileMenuVisible }) => {
  const { currentPage } = useContext(CurrentPageContext);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`mobile-menu ${MobileMenuVisible ? "visible" : "hidden"}`}
      style={{ height: `${windowHeight}px` }}
    >
      <div className="mobile-menu-container">
        <Link
          to="/"
          className="mobile-menu-item"
          style={
            currentPage === "home"
              ? {
                  textDecoration: "underline",
                  color: "white",
                  textShadow:
                    "-1.5px -1.5px 0 #000, 1.5px -1.5px 0 #000, -1.5px 1.5px 0 #000, 1.5px 1.5px 0 #000",
                }
              : { textDecoration: "none", color: "white" }
          }
        >
          HOME
        </Link>
        <Link
          to="/menu"
          className="mobile-menu-item"
          style={
            currentPage === "menu"
              ? {
                  textDecoration: "underline",
                  color: "white",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
                }
              : { textDecoration: "none", color: "white" }
          }
        >
          MENU
        </Link>
        <Link
          to="/contact-us"
          className="mobile-menu-item"
          style={
            currentPage === "contact-us"
              ? {
                  textDecoration: "underline",
                  color: "white",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
                }
              : { textDecoration: "none", color: "white" }
          }
        >
          GET IN TOUCH
        </Link>
        <Link
          to="/about-us"
          className="mobile-menu-item"
          style={
            currentPage === "about-us"
              ? {
                  textDecoration: "underline",
                  color: "white",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
                }
              : { textDecoration: "none", color: "white" }
          }
        >
          ABOUT US
        </Link>
        <Link
          to="/find-us"
          className="mobile-menu-item"
          style={
            currentPage === "find-us"
              ? {
                  textDecoration: "underline",
                  color: "white",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
                }
              : { textDecoration: "none", color: "white" }
          }
        >
          FIND US
        </Link>
        <div className="mobile-menu-item">
          <a
            style={{
              textDecoration: "none",
              color: "white",
              marginLeft: "5vw",
            }}
            href="https://www.instagram.com/anakumabrighton/"
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTAGRAM
          </a>
          <SocialIcon
            className="INSTAGRAM-icon"
            url="https://www.instagram.com/anakumabrighton/"
            target="_blank"
            rel="noopener noreferrer"
            fgColor={"white"}
            bgColor={"#28412d"}
            style={{ height: "4vh", width: "4vh" }}
          />
        </div>
        <div className="mobile-menu-item">
          <a
            style={{
              textDecoration: "none",
              color: "white",
              marginLeft: "5vw",
            }}
            href="https://www.facebook.com/profile.php?id=61552572519429"
            target="_blank"
            rel="noopener noreferrer"
          >
            FACEBOOK
          </a>
          <SocialIcon
            className="facebook-icon"
            url="https://www.facebook.com/profile.php?id=61552572519429"
            target="_blank"
            rel="noopener noreferrer"
            fgColor={"white"}
            bgColor={"#28412d"}
            style={{ height: "4vh", width: "4vh" }}
          />
        </div>
        <a
        style={{textDecoration: 'none'}}
        className="mobile-menu-item"
        target="_blank"
        href="https://www.halisco-brighton.co.uk/"
      >
        <div className="halisco-wrapper-menu-mobile">
          <h1 className="halisco-menu-title">HALISCO</h1>
          <img
            src="/Images/halisco-skull-logo.png"
            className="halisco-menu-logo-mobile"
          />
        </div>
      </a>
      </div>
    </div>
  );
};

export default MobileMenu;
