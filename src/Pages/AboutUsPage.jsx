import { useEffect, useState } from "react";
import LoadingScreen from "../Components/LoadingScreen";
import useImagesLoaded from "../Components/useImagesLoaded";
import AboutUs from "../Components/HomePage/AboutUs";
import Footer from "../Components/Footer/Footer";
import FooterPortrait from "../Components/Footer/FooterPortrait";
import AboutUsPortrait from "../Components/HomePage/AboutUsPortrait";

const AboutUsPage = ({ setCurrentPage, currentPage }) => {
  const [showLoading, setShowLoading] = useState(true);
  const [isPortrait, setIsPortrait] = useState(
    window.innerWidth < window.innerHeight
  );

  useEffect(() => {
    const handleOrientationChange = () => {
        setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener("resize", handleOrientationChange);

    // Clean up event listener on component unmount
    return () => {
        window.removeEventListener("resize", handleOrientationChange);
    };
}, []);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      setShowLoading(false);
    }, 1250);
    setCurrentPage("about-us");
    window.scrollTo(0, 0);

    const backgroundContainer = document.createElement("div");
    backgroundContainer.classList.add("about-us-background");
    backgroundContainer.style.backgroundImage = "url(/Images/background.jpg)";
    backgroundContainer.style.backgroundPosition = "center";
    backgroundContainer.style.backgroundRepeat = "no-repeat";
    backgroundContainer.style.backgroundSize = "cover";
    backgroundContainer.style.height = "110vh";
    backgroundContainer.style.width = "100%";
    backgroundContainer.style.paddingLeft = "8vw";
    backgroundContainer.style.position = "fixed";
    backgroundContainer.style.top = 0;
    backgroundContainer.style.left = 0;
    backgroundContainer.style.zIndex = -1;

    document.body.appendChild(backgroundContainer);

    return () => {
      document.body.removeChild(backgroundContainer);
    };
  }, [currentPage]);

  const imagesLoaded = useImagesLoaded([
    "/Images/restaurant-landscape.jpg",
    "/Images/background.jpg"
  ]);

  return (
    <>
      {(showLoading || (isPortrait && !imagesLoaded)) && <LoadingScreen />}
      {isPortrait? <img className="anakuma-outside" src="/Images/restaurant-landscape.jpg" alt="Anakuma inside" /> : null}
      {isPortrait ? <AboutUsPortrait /> : <AboutUs />}
      {isPortrait? <FooterPortrait /> : <Footer />}
    </>
  );
};

export default AboutUsPage;
