import { useEffect, useState } from "react";
import ImgSlideshow from "../Components/HomePage/ImgSlideshow";
import HomePageLandscape from "../Components/HomePage/HomePageLandscape";
import HomePagePortrait from "../Components/HomePage/HomePagePortrait";
import "../../CSS/HomePage.css";

const HomePage = ({ setCurrentPage, currentPage }) => {

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

  useEffect(() => {
    setCurrentPage("home");

    const backgroundContainer = document.createElement("div");
    backgroundContainer.classList.add("about-us-background");
    backgroundContainer.style.backgroundImage = "url(/Images/background.jpg)";
    backgroundContainer.style.backgroundPosition = "center";
    backgroundContainer.style.backgroundRepeat = "no-repeat";
    backgroundContainer.style.backgroundSize = "cover";
    backgroundContainer.style.height = "110vh";
    backgroundContainer.style.width = "100%";
    backgroundContainer.style.paddingLeft = "8vw"
    backgroundContainer.style.position = "fixed";
    backgroundContainer.style.top = 0;
    backgroundContainer.style.left = 0;
    backgroundContainer.style.zIndex = -1;

    document.body.appendChild(backgroundContainer);

    return () => {
      document.body.removeChild(backgroundContainer);
    };
  }, [currentPage]);

  return (
    <>
      <ImgSlideshow />
      {isPortrait? <HomePagePortrait/> : <HomePageLandscape />}
    </>
  );
};

export default HomePage;
