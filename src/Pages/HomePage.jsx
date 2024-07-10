import { useEffect } from "react";
import ImgSlideshow from "../Components/HomePage/ImgSlideshow";
import HomePageLandscape from "../Components/HomePage/HomePageLandscape";
import "../../CSS/HomePage.css";

const HomePage = ({ setCurrentPage, currentPage }) => {
  useEffect(() => {
    setCurrentPage("home");
  }, []);

  return (
    <>
    <ImgSlideshow/>
    <HomePageLandscape/>
    </>
  );
};

export default HomePage;
