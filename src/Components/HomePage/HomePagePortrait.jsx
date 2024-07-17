import AboutUsPortrait from "./AboutUsPortrait";
import ContactUs from "./ContactUs";
import { Link } from "react-router-dom";
import FindUsPortrait from "./FindUsPortrait";
import "../../../CSS/AboutUs.css";

const HomePagePortrait = () => {
  return (
    <>
      <div className="home-page-container">
        <section className="welcome-section">
          <div className="anakuma-welcome">
            <div className="badger-container">
              <img
                className="badger-logo"
                alt="anakuma white badger"
                src="/Images/badger-white.png"
              />
            </div>
            <img
              className="anakuma-title"
              alt="anakuma white badger"
              src="/Images/anakuma-black-writing.png"
            />
            <div className="badger-container">
              <img
                className="badger-logo"
                alt="anakuma white badger"
                src="/Images/badger-white.png"
              />
            </div>
          </div>
          <AboutUsPortrait />
          <ContactUs />
          <FindUsPortrait />
          <Link className={"menu-link"} to="/menu"
          >
            VIEW OUR FULL MENU
          </Link>
        </section>
      </div>
    </>
  );
};

export default HomePagePortrait;
