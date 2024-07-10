import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { useState, useEffect, useRef } from "react";

const PortraitHeader = ({ MobileMenuVisible, setMobileMenuVisible }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isPortrait, setIsPortrait] = useState(window.innerWidth < window.innerHeight);
  const infoContainerRef = useRef(null);

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

  const handleMobileMenuClick = () => {
    setMobileMenuVisible(!MobileMenuVisible);

    if (!MobileMenuVisible) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  };

  useEffect(() => {
    if (MobileMenuVisible) {
      document.body.style.overflow = "hidden";
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [MobileMenuVisible]);

  const handleOutsideClick = (e) => {
    if (infoContainerRef.current && !infoContainerRef.current.contains(e.target)) {
      setMobileMenuVisible(false);
      document.body.classList.remove("menu-open");
    }
  };

  return (
    <>
      <header>
        <div className="header-container">
          <Link to="/" className="logo-container">
            <img
              className="anakuma-logo"
              alt="anakuma logo with white badger"
              src="/Images/badger-white.png"
            />
            <img
              className="anakuma-writing"
              alt="anakuma"
              src="/Images/anakuma-white-writing.png"
            />
          </Link>
          <div
            ref={infoContainerRef}
            className="info-container"
            onClick={handleMobileMenuClick}
          >
            <div className="hamburger-menu">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu MobileMenuVisible={MobileMenuVisible} />
    </>
  );
};

export default PortraitHeader;
