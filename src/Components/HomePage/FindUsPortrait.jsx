const FindUsPortrait = () => {
  return (
    <div className="info-container-find-us">
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
              <li className="day">Monday</li>
              <li className="day">Tuesday</li>
              <li className="day">Wednesday</li>
              <li className="day">Thursday</li>
              <li className="day">Friday</li>
              <li className="day">Saturday</li>
              <li className="day">Sunday</li>
            </ul>
          </div>
          <div className="right-column">
            <ul className="opening-times">
              <li className="day">12:00 – 10:00 pm</li>
              <li className="day">12:00 – 09:00 pm</li>
              <li className="day">12:00 – 09:00 pm</li>
              <li className="day">12:00 – 09:00 pm</li>
              <li className="day">12:00 – 10:00 pm</li>
              <li className="day">12:00 – 10:00 pm</li>
              <li className="day">12:00 – 09:00 pm</li>
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
    </div>
  );
};

export default FindUsPortrait;
