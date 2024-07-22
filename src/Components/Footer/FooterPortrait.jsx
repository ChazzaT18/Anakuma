import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import React from "react";

const FooterPortrait = () => {
  return (
    <div className="footer-container-mobile">
      <div className="restaurant-info-mobile">
        <div className="footer-address-mobile">
          <p className="address-text-mobile">
          ANAKUMA, 50 Preston St, Brighton and Hove, BN1 2HP
          </p>
        </div>
        <div className="footer-contact-mobile">
          <SocialIcon
            className="facebook-icon"
            url="https://www.instagram.com/anakumabrighton/"
            target="_blank"
            rel="noopener noreferrer"
            fgColor={"white"}
            bgColor={"#384129"}
            style={{ height: "7vw", width: "7vw" }}
          />
          <a style={{ color: "white" }} href="tel:01273459396">
          01273 459396
          </a>
          <a
            style={{ color: "white" }}
            href="mailto:Hello@anakuma.co.uk"
          >
            Hello@anakuma.co.uk
          </a>
          <SocialIcon
            className="instagram-icon"
            url="https://www.facebook.com/profile.php?id=61552572519429"
            target="_blank"
            rel="noopener noreferrer"
            fgColor={"white"}
            bgColor={"#384129"}
            style={{ height: "7vw", width: "7vw" }}
          />
        </div>
      </div>
      <div className="footer-nav-mobile">
      <Link to="/home" className="footer-menu-item-mobile">
          HOME
        </Link>
        <Link to="/contact-us" className="footer-menu-item-mobile">
          GET IN TOUCH
        </Link>
        <Link to="/menu" className="footer-menu-item-mobile">
          MENU
        </Link>
        <Link to="/about-us" className="footer-menu-item-mobile">
          ABOUT US
        </Link>
        <Link to="/find-us" className="footer-menu-item-mobile">
          FIND US
        </Link>
      </div>
      <a
        style={{textDecoration: 'none'}}
        className="halisco-footer-container-mobile"
        target="_blank"
        href="https://www.halisco-brighton.co.uk/"
      >
        <p className="halisco-message-mobile" style={{ margin: "0px" }}>
          VISIT OUR SISTER RESTAURANT:
        </p>
        <div className="halisco-wrapper-mobile">
          <h1 className="halisco-footer-title">HALISCO</h1>
          <img
            src="/Images/halisco-skull-logo.png"
            className="halisco-footer-logo-mobile"
          />
        </div>
      </a>
    </div>
  );
};

export default FooterPortrait;
