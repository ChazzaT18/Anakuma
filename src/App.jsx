import { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../CSS/MobileBookingButton.css";
import AboutUsPage from "../src/Pages/AboutUsPage";
import FindUsPage from "../src/Pages/FindUsPage";
import ContactUsPage from "../src/Pages/ContactUsPage";
import MenuPage from "../src/Pages/MenuPage";
import HomePage from "../src/Pages/HomePage";
import MobileBookingButton from "./Components/HomePage/MobileBookingButton";
import CurrentPageContext from "./Context/CurrentPageContext";
import LoadingOverlay from "./Components/LoadingOverlay";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("");
  const [isPortrait, setIsPortrait] = useState(
    window.innerWidth < window.innerHeight
  );
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Initial window width
  const [MobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleOrientationChange = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener("resize", handleOrientationChange);

    return () => {
      window.removeEventListener("resize", handleOrientationChange);
    };
  }, []);

  useEffect(() => {
    const contentTimeout = setTimeout(() => {
      setShowContent(true);
    }, 1300);

    return () => clearTimeout(contentTimeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
      <LoadingOverlay loading={loading} />
      {showContent && (
        <Router>
          <Header
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            MobileMenuVisible={MobileMenuVisible}
            setMobileMenuVisible={setMobileMenuVisible}
          />
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                />
              }
            />
            <Route
              path="/about-us"
              element={
                <AboutUsPage
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                />
              }
            />
            <Route
              path="/menu"
              element={
                <MenuPage
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                />
              }
            />
            <Route
              path="/contact-us"
              element={
                <ContactUsPage
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                />
              }
            />
            <Route
              path="/find-us"
              element={
                <FindUsPage
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                />
              }
            />
          </Routes>
          {isPortrait && (
            <MobileBookingButton
              MobileMenuVisible={MobileMenuVisible}
              setMobileMenuVisible={setMobileMenuVisible}
            />
          )}
        </Router>
      )}
    </CurrentPageContext.Provider>
  );
}

export default App;
