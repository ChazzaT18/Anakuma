import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import CurrentPageContext from "../../Context/CurrentPageContext";
import "../../../CSS/MobileMenu.css";

const MobileMenu = ({ MobileMenuVisible }) => {
  const { currentPage } = useContext(CurrentPageContext);

  return (
    <div className={`mobile-menu ${MobileMenuVisible ? "visible" : "hidden"}`}>
      <div className="mobile-menu-container">
        <Link
          to="/"
          className="mobile-menu-item"
          style={
            currentPage === "home"
              ? {
                  textDecoration: "underline",
                  color: "rgb(236, 223, 207)",
                  textShadow:
                    "-1.5px -1.5px 0 #000, 1.5px -1.5px 0 #000, -1.5px 1.5px 0 #000, 1.5px 1.5px 0 #000",
                }
              : { textDecoration: "none", color: "rgb(236, 223, 207)" }
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
                  color: "rgb(236, 223, 207)",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
                }
              : { textDecoration: "none", color: "rgb(236, 223, 207)" }
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
                  color: "rgb(236, 223, 207)",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
                }
              : { textDecoration: "none", color: "rgb(236, 223, 207)" }
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
                  color: "rgb(236, 223, 207)",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
                }
              : { textDecoration: "none", color: "rgb(236, 223, 207)" }
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
                  color: "rgb(236, 223, 207)",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
                }
              : { textDecoration: "none", color: "rgb(236, 223, 207)" }
          }
        >
          FIND US
        </Link>
        <div className="mobile-menu-item">
          <a
            style={{
              textDecoration: "none",
              color: "rgb(236, 223, 207)",
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
            fgColor={"rgb(236, 223, 207)"}
            bgColor={"#28412d"}
            style={{ height: "4vh", width: "4vh" }}
          />
        </div>
        <div className="mobile-menu-item">
          <a
            style={{
              textDecoration: "none",
              color: "rgb(236, 223, 207)",
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
            fgColor={"rgb(236, 223, 207)"}
            bgColor={"#28412d"}
            style={{ height: "4vh", width: "4vh" }}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
