import "../../../CSS/Header.css";
import { useState } from "react";
import { SocialIcon } from "react-social-icons";
import BookingWidget from "./BookingWidget";
import InfoMenu from "./InfoMenu";

const Header = () => {
  const [infoMenuVisible, setInfoMenuVisible] = useState(false);

  const toggleInfoMenu = () => {
    setInfoMenuVisible(!infoMenuVisible);
  };

  return (
    <>
      <header>
        <div className="header-container">
          <div className="home-container">
            <h3 className="home-button">HOME</h3>
          </div>
          <div className="menu-container">
            <h3 className="menu-button">MENU</h3>
          </div>
          <div className="facebook-container">
            <SocialIcon
              className="facebook-icon"
              url="https://www.facebook.com/profile.php?id=61552572519429"
              target="_blank"
              rel="noopener noreferrer"
              fgColor={"black"}
              bgColor={"white"}
              style={{ height: '2.5vw', width: '2.5vw' }}
            />
          </div>
          <div className="logo-container">
            <img
              className="anakuma-logo"
              alt="anakuma logo with white badger"
              src="/Images/badger-white.png"
            />
          </div>
          <div className="instagram-container">
            <SocialIcon
              className="instagram-icon"
              url="https://www.instagram.com/anakumabrighton/"
              target="_blank"
              rel="noopener noreferrer"
              fgColor={"black"}
              bgColor={"white"}
              style={{ height: "2.5vw", width: "2.5vw", margin: "1px" }}
            />
          </div>
          <BookingWidget />
          <div className="info-container">
            <h3 className="info-button" onClick={toggleInfoMenu}>
              INFO
              <span className={`arrow-info ${infoMenuVisible ? 'rotate' : ''}`}>
                &#9660;
              </span>
            </h3>
          </div>
        </div>
      </header>
      <InfoMenu isVisible={infoMenuVisible} />
    </>
  );
};

export default Header;
