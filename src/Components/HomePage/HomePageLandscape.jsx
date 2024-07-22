import AboutUs from "./AboutUs";
import FindUsLandscape from "./FindUsLandscape"
import ContactUs from "./ContactUs";
import "../../../CSS/FindUs.css"

const HomePageLandscape = ({currentPage}) => {
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
      </section>
    </div>
        <AboutUs />
        <ContactUs currentPage={currentPage}/>
        <FindUsLandscape currentPage={currentPage}/>
    </>
  );
};

export default HomePageLandscape;
