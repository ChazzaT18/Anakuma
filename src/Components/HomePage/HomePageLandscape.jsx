import ImgSlideshow from "../HomePage/ImgSlideshow";

const HomePageLandscape = () => {
  return (
    <div className="home-page-container">
      {/* <ImgSlideshow /> */}
      <section className="welcome-section">
        <div className="anakuma-welcome">
            <div className="badger-container">
            <img
                className="badger-logo"
                alt="anakuma white badger"
                src="/Images/badger-white.png"
              />
            </div>
            <h1 className="anakuma-title">ANAKUMA</h1>
            <div className="badger-container">
            <img
                className="badger-logo"
                alt="anakuma white badger"
                src="/Images/badger-white.png"
              />
            </div>
        </div>
        <h1>YO</h1>
      </section>
    </div>
  );
};

export default HomePageLandscape;
