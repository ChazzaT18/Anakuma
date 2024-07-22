import { useEffect, useState } from "react";
import FindUsLandscape from "../Components/HomePage/FindUsLandscape";
import FindUsPortrait from "../Components/HomePage/FindUsPortrait";
import Footer from "../Components/Footer/Footer";
import LoadingScreen from "../Components/LoadingScreen";

const FindUsPage = ({ setCurrentPage, currentPage }) => {

    const [showLoading, setShowLoading] = useState(true);
    const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      setShowLoading(false); 
    }, 1000); 

    setCurrentPage("find-us");
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

  return (
    <div className="find-us-page-container">
      {showLoading && <LoadingScreen />}
      {isPortrait? <FindUsPortrait/> : <FindUsLandscape currentPage={currentPage} />}
      <Footer />
    </div>
  );
};

export default FindUsPage;
