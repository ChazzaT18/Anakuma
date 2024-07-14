import { Link } from "react-router-dom";

const FindUsLandscape = () => {

  return (
    <div className="info-container-find-us">
      <div className="coloured-square">
        <div className="map-container">
          <iframe
            width="100%"
            height="100%"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Halisco,%20preston%20street+(Halisco)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
        <a
          className="open-in-maps"
          href="https://maps.google.com/?cid=6499093692546815867"
          target="_blank"
        >
          GET DIRECTIONS
        </a>
      </div>
      <div className="info-section">
        <h3 className='info-heading-find-us'>OPENING TIMES</h3>
        <div className="opening-times-container">
          <div className="left-column">
              <span className="day">
                Monday
              </span>
              <br />
              <span className="day">Tuesday</span>
              <br />
              <span className="day">Wednesday</span>
              <br />
              <span className="day">Thursday</span>
              <br />
              <span className="day">Friday</span>
              <br />
              <span className="day">Saturday</span>
              <br />
              <span className="day">Sunday</span>
              <br />
          </div>
          <div className="right-column">
            <span className="times">12:00 – 10:00 pm</span>
            <br />
            <span className="times">12:00 – 9:00 pm</span>
            <br />
            <span className="times">12:00 – 9:00 pm</span>
            <br />
            <span className="times">12:00 – 9:00 pm</span>
            <br />
            <span className="times">12:00 – 10:00 pm</span>
            <br />
            <span className="times">12:00 – 10:00 pm</span>
            <br />
            <span className="times">
              12:00 – 9:00 pm
            </span>
            <br />
          </div>
        </div>
        <div className="contact-container">
          <h3 className="contact-details">
            64 Preston St <br /> Brighton and Hove <br /> BN1 2HE
            <br />
            <a style={{ color: "rgb(236, 223, 207)" }} href="tel:01273326563">
              01273 459396
            </a>{" "}
            <a
              style={{ color: "rgb(236, 223, 207)", margin: "0px" }}
              href="mailto:Hola@halisco.co.uk"
            >
              Hola@halisco.co.uk
            </a>
            <br />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FindUsLandscape;