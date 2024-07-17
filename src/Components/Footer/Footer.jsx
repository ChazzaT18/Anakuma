import "../../../CSS/Footer.css";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import FooterPortrait from "./FooterPortrait";

const Footer = () => {
  const [isPortrait, setIsPortrait] = useState(
    window.innerHeight > window.innerWidth
  );

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showBookingWidget = () => {
    window.ft_showbookingwidget("ft_bookingwidget1931");
  };

  const portalContent = <div id="ft_bookingwidget1931" sitecode="1931"></div>;

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      document.getElementById("booking-widget-portal").style.display = "flex";
      showBookingWidget();
    }
  };


  return (
    <>
      {isPortrait ? (
        <FooterPortrait />
      ) : (
        <div className="footer-container">
          <div className="restaurant-info">
            <div className="footer-address">
              <p className="address-text">
              ANAKUMA, 50 Preston St, Brighton and Hove, BN1 2HP
              </p>
            </div>
            <div className="footer-socials">
              <SocialIcon
                className="facebook-icon"
                url="https://www.facebook.com/HaliscoRestaurant/"
                target="_blank"
                rel="noopener noreferrer"
                fgColor={"white"}
                bgColor={"#384129"}
                style={{ height: "5vh", width: "5vh" }}
              />
              <SocialIcon
                className="instagram-icon"
                url="https://www.instagram.com/haliscobrighton/"
                target="_blank"
                rel="noopener noreferrer"
                fgColor={"white"}
                bgColor={"#384129"}
                style={{ height: "5vh", width: "5vh" }}
              />
            </div>
            <div className="footer-contact">
              <a style={{ color: "inherit" }} href="tel:01273459396">
              01273 459396
              </a>
              <a
                style={{ color: "white", marginLeft: "5vw" }}
                href="mailto:Hello@anakuma.co.uk"
              >
                Hello@anakuma.co.uk
              </a>
            </div>
          </div>
          <div className="footer-nav">
            <div className="nav-wrapper">
              <Link to="/contact-us" className="footer-menu-item">
                GET IN TOUCH
              </Link>
              <Link to="/menu" className="footer-menu-item">
                MENU
              </Link>
              <Link to="/about-us" className="footer-menu-item">
                ABOUT US
              </Link>

              <Link to="/find-us" className="footer-menu-item">
                FIND US
              </Link>
              <a
                className="footer-menu-item"
                tabIndex={0}
                onKeyDown={handleKeyDown}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(
                    "booking-widget-portal"
                  ).style.display = "flex";
                  showBookingWidget();
                }}
              >
                BOOK A TABLE
              </a>
              {ReactDOM.createPortal(
                portalContent,
                document.getElementById("booking-widget-portal")
              )}
            </div>
          </div>
          <div className="halisco-footer-container">
            <p className="halico-message" style={{ margin: "0px" }}>
              VISIT OUR SISTER RESTAURANT:
            </p>
            <a
              target="_blank"
              className="halisco-wrapper"
              href="https://halisco-brighton.co.uk/"
              style={{ color: "rgb(236, 223, 207)", textDecoration: "none" }}
            >
              <p className="halisco-footer-title" style={{ color: "white", marginBottom: "1.5vh", marginTop: "0", fontStyle: "normal" }}>HALISCO</p>
              <img
                src="/Images/halisco-skull-logo.png"
                className="halisco-footer-logo"
                alt="Halisco Logo"
              />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
