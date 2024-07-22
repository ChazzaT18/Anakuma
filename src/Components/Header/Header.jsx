import "../../../CSS/Header.css";
import { useEffect, useState } from "react";
import LandscapeHeader from "./LandscapeHeader";
import PortraitHeader from "./PortraitHeader";

const Header = ({ setCurrentPage, currentPage, MobileMenuVisible, setMobileMenuVisible }) => {
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

  return isPortrait ? (
    <PortraitHeader MobileMenuVisible={MobileMenuVisible} setMobileMenuVisible={setMobileMenuVisible} />
    
  ) : (
    <LandscapeHeader
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
    />
  );
};

export default Header;
