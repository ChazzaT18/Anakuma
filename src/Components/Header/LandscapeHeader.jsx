import { SocialIcon } from "react-social-icons";
import BookingWidget from "./BookingWidget";
import { useEffect, useState } from "react";
import InfoMenu from "./InfoMenu";
import InfoMenuExtended from "./InfoMenuExtended";
import { Link } from "react-router-dom";

const LandscapeHeader = ({ setCurrentPage, currentPage }) => {
  const [infoMenuVisible, setInfoMenuVisible] = useState(false);
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

  const toggleInfoMenu = () => {
    setInfoMenuVisible(!infoMenuVisible);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (infoMenuVisible && !e.target.closest(".info-container")) {
        setInfoMenuVisible(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [infoMenuVisible]);


  return (
    <>
      <header>
        {window.innerWidth > 1000 ? (
          <div className="header-container">
            <div className="home-container">
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                }}
                className={
                  currentPage === "home" ? "selected-page" : "home-button"
                }
              >
                HOME
              </Link>
            </div>
            <div className="menu-container">
              <Link
                to="/menu"
                style={{
                  textDecoration: "none",
                }}
                className={
                  currentPage === "menu" ? "selected-page" : "menu-button"
                }
              >
                MENU
              </Link>
            </div>
            <div className="facebook-container">
              <SocialIcon
                className="facebook-icon"
                url="https://www.facebook.com/profile.php?id=61552572519429"
                target="_blank"
                rel="noopener noreferrer"
                fgColor={"white"}
                bgColor={"#384129"}
                style={{ height: "5.25vh", width: "5.25vh" }}
              />
            </div>
            <Link
              to="/"
              className="logo-container"
              onClick={() => setCurrentPage("home")}
            >
              <img
                className="anakuma-logo"
                alt="anakuma logo with white badger"
                src="/Images/badger-white.png"
              />
            </Link>
            <div className="instagram-container">
              <SocialIcon
                className="instagram-icon"
                url="https://www.instagram.com/anakumabrighton/"
                target="_blank"
                rel="noopener noreferrer"
                fgColor={"white"}
                bgColor={"#384129"}
                style={{ height: "5.25vh", width: "5.25vh" }}
              />
            </div>
            <BookingWidget />
            <div className="info-container">
              <div className="hamburger-menu" onClick={toggleInfoMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="header-container">
            <Link
              to="/"
              className="logo-container"
              onClick={() => setCurrentPage("home")}
            >
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
            <BookingWidget />
            <div className="info-container">
              <div className="hamburger-menu" onClick={toggleInfoMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            </div>
          </div>
        )}
      </header>
      {window.innerWidth < 1000 ? (
        <InfoMenuExtended
          infoMenuVisible={infoMenuVisible}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      ) : (
        <InfoMenu
          infoMenuVisible={infoMenuVisible}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      )}
    </>
  );
};

export default LandscapeHeader;
