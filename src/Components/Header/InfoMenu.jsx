import { Link } from "react-router-dom";

const InfoMenu = ({ setCurrentPage, currentPage, infoMenuVisible }) => {
  
  return (
    <div className={`info-menu ${infoMenuVisible ? 'visible' : ''}`}>
      <div className="info-menu-content">
        <Link
          to="/find-us"
          style={{
            textDecoration: "none",
            color: "inherit",
            paddingLeft: '0.5vh',
            paddingRight: '0.5vh',
            paddingBottom: '0.5vh',
            borderBottom: currentPage === 'find-us' ? '0.6vh solid white' : '0.6vh solid #00000000'
          }}
        >
          FIND US
        </Link>
        <Link
          to="/contact-us"
          style={{
            textDecoration: "none",
            color: "inherit",
            paddingLeft: '0.5vh',
            paddingRight: '0.5vh',
            borderBottom: currentPage === 'contact-us' ? '0.6vh solid white' : '0.6vh solid #00000000'
          }}
        >
          GET IN TOUCH
        </Link>
        <Link
          to="/about-us"
          style={{
            textDecoration: "none",
            color: "inherit",
            paddingLeft: '0.5vh',
            paddingRight: '0.5vh',
            borderBottom: currentPage === 'about-us' ? '0.6vh solid white' : '0.6vh solid #00000000'
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
          <img className="halisco-logo" src='/Images/halisco-skull-logo.png'/>
        </div>
      </div>
    </div>
  );
};

export default InfoMenu;
