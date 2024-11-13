import { Link } from "react-router-dom";
import {useContext} from "react";
import CurrentPageContext from "../../Context/CurrentPageContext";

const FindUsPortrait = () => {

 const { currentPage } = useContext(CurrentPageContext);

  return (
    <div className="info-container-find-us" style={{borderTop: currentPage === "find-us"? "0.75vh solid #b8a585" : "none"}}>
      <h1 className="find-us-title">FIND US</h1>
      <div className="coloured-square">
        <div className="map-container">
          <iframe
            width="100%"
            height="100%"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Anakuma,%2050%20preston%20street%20brighton+(Anakuma)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
          </iframe>
        </div>
        <a
          className="open-in-maps"
          href="https://maps.google.com/?cid=6499093692546815867"
          target="_blank"
        >
          GET DIRECTIONS
        </a>
      </div>
      <h1 className="opening-times-title">OPENING TIMES</h1>
      <div className="opening-times-container">
        <div className="date-time-container">
          <div className="left-column">
            <ul className="opening-times">
              <li className="day">MONDAY</li>
              <li className="day">TUESDAY</li>
              <li className="day">WEDNESDAY</li>
              <li className="day">THURSDAY</li>
              <li className="day">FRIDAY</li>
              <li className="day">SATURDAY</li>
              <li className="day">SUNDAY</li>
            </ul>
          </div>
          <div className="right-column">
            <ul className="opening-times">
              <li className="day">Closed</li>
              <li className="day">12:00 – 09:00 PM</li>
              <li className="day">12:00 – 09:00 PM</li>
              <li className="day">12:00 – 09:00 PM</li>
              <li className="day">12:00 – 09:30 PM</li>
              <li className="day">12:00 – 09:30 PM</li>
              <li className="day">12:00 – 08:30 PM</li>
            </ul>
          </div>
        </div>
        <div className="contact-container">
          <h3
            className="contact-details"
            style={{ width: "25%", paddingLeft: "6.5%", paddingRight: "6%" }}
          >
            50 Preston St <br /> Brighton and Hove <br /> BN1 2HP
            <br />
          </h3>
          <div className="number-email">
            <a href="tel:01273459396" style={{ color: "white", margin: "0px" }}>
              01273 459396
            </a>{" "}
            <br />
            <a
              style={{ color: "white", margin: "0px" }}
              href="mailto:Hello@anakuma.co.uk"
            >
              Hello@anakuma.co.uk
            </a>
          </div>
        </div>
      </div>
      <Link className={"menu-link"} style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)'}} to="/menu"
          >
            VIEW OUR FULL MENU
          </Link>
    </div>
  );
};

export default FindUsPortrait;
