import DishCard from "./DishCard";
import DrinkCard from "./DrinkCard";
import LoadingScreen from "../LoadingScreen";
import useImagesLoaded from "../useImagesLoaded";
import { useEffect, useState, useRef } from "react";

const MenuLandscape = ({
  snacksMenu,
  smallPlatesMenu,
  baoMenu,
  cocktailsMenu,
  beerMenu,
  spiritsMenu,
  kampaiMenu,
  softDrinksMenu
}) => {
  const navRef = useRef(null);
  const [isPortrait, setIsPortrait] = useState(
    window.innerHeight > window.innerWidth
  );
  const [currentSection, setCurrentSection] = useState(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  const imageUrls = [
    "/Images/MenuPage/shrimp-nuggets.jpg",
    "/Images/MenuPage/dessert.jpg",
    "/Images/MenuPage/cocktail-1.jpg",
    "/Images/MenuPage/tuna.jpg",
    "/Images/MenuPage/wines.jpg",
    "/Images/MenuPage/seabass.jpg",
    "/Images/MenuPage/mixed-foods.jpg",
    "/Images/MenuPage/cocktail-2.jpg",
    "/Images/MenuPage/beer-bao.jpg",
    "/Images/MenuPage/bao-bun-3.jpg",
  ];

  const imagesLoaded = useImagesLoaded(imageUrls);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setHeaderHeight(screenWidth < 1000 ? 0.1 : 0.12);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [headerHeight]);

  useEffect(() => {
    const handleOrientationChange = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener("resize", handleOrientationChange);

    return () => {
      window.removeEventListener("resize", handleOrientationChange);
    };
  }, [isPortrait]);

  useEffect(() => {
    const handleScrollDown = () => {
      const stickyNav = navRef.current;
      const navReplacement = document.querySelector(".nav-replacement");
      if (stickyNav && navReplacement) {
        const sticky = stickyNav.offsetTop;
        if (window.scrollY >= sticky - window.innerHeight * headerHeight) {
          stickyNav.classList.add("sticky");
          navReplacement.style.height = `${stickyNav.offsetHeight}px`;
        }
      }
    };

    const handleScrollUp = () => {
      const stickyNav = navRef.current;
      const navReplacement = document.querySelector(".nav-replacement");
      if (stickyNav && navReplacement) {
        const sticky = stickyNav.offsetTop;
        const isAboveReplacement =
          window.scrollY <=
          navReplacement.offsetTop - window.innerHeight * headerHeight;
        if (isAboveReplacement) {
          navReplacement.style.height = "0";
          stickyNav.classList.remove("sticky");
        }
      }
    };

    window.addEventListener("scroll", handleScrollDown);
    window.addEventListener("scroll", handleScrollUp);

    return () => {
      window.removeEventListener("scroll", handleScrollDown);
      window.removeEventListener("scroll", handleScrollUp);
    };
  }, [headerHeight]);

  useEffect(() => {
    const handleSectionScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = null;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - window.innerHeight * 0.36;
        if (window.scrollY >= sectionTop) {
          current = section.id;
        }
      });
      setCurrentSection(current);
    };

    window.addEventListener("scroll", handleSectionScroll);

    return () => {
      window.removeEventListener("scroll", handleSectionScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - window.innerHeight * 0.32,
        behavior: "smooth",
      });
    }
  };

  if (!imagesLoaded) {
    return <LoadingScreen />
  }

  return (
    <>
      <div className="menu-page-title-container">
        <h1 className="menu-page-title">MENU</h1>
      </div>
      <div className="menu-page-container">
        <div className="menu-img-container">
          <div className="horizontal-div-1">
            <div className="square-div">
              <img
                src="/Images/MenuPage/shrimp-nuggets.jpg"
                alt="Chicken and prawn sesame nuggets"
                className="square-img"
              />
            </div>
            <div className="square-div">
              <img
                src="/Images/MenuPage/dessert.jpg"
                alt="dessert"
                className="square-img"
              />
            </div>
          </div>
          <div className="horizontal-div-2">
            <div className="full-div">
              <img
                src="/Images/MenuPage/cocktail-1.jpg"
                alt="pink cocktail"
                className="full-img"
              />
            </div>
          </div>
          <div className="horizontal-div-3">
            <div className="square-div">
              <img
                src="/Images/MenuPage/tuna.jpg"
                alt="tuna steak"
                className="square-img"
              />
            </div>
            <div className="square-div">
              <img
                src="/Images/MenuPage/wines.jpg"
                alt="selection of wines"
                className="square-img"
              />
            </div>
          </div>
          <div className="horizontal-div-4">
            <div className="square-div">
              <img
                src="/Images/MenuPage/seabass.jpg"
                alt="seabass fillet"
                className="square-img"
              />
            </div>
            <div className="square-div">
              <img
                src="/Images/MenuPage/mixed-foods.jpg"
                alt="mixed plate of foods"
                className="square-img"
              />
            </div>
          </div>
          <div className="horizontal-div-5">
            <div className="full-div">
              <img
                src="/Images/MenuPage/cocktail-2.jpg"
                alt="lemon cocktail"
                className="full-img"
              />
            </div>
          </div>
          <div className="horizontal-div-6">
            <div className="square-div">
              <img
                src="/Images/MenuPage/beer-bao.jpg"
                alt="beers, bao buns and wonton chips"
                className="square-img"
              />
            </div>
            <div className="square-div">
              <img
                src="/Images/MenuPage/bao-bun-3.jpg"
                alt="beers, bao buns and wonton chips"
                className="square-img"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="menu-nav" ref={navRef} id="sticky-nav">
        <div className="menu-nav-category-container">
          <p
            onClick={() => scrollToSection("snacks-container")}
            className={
              currentSection === "snacks-container"
                ? "nav-category active"
                : "nav-category"
            }
          >
            SNACKS
          </p>
        </div>
        <div className="menu-nav-category-container">
          {" "}
          <p
            onClick={() => scrollToSection("small-plates-container")}
            className={
              currentSection === "small-plates-container"
                ? "nav-category active"
                : "nav-category"
            }
          >
            SMALL PLATES
          </p>
        </div>
        <div className="menu-nav-category-container">
          {" "}
          <p
            onClick={() => scrollToSection("bao-buns-container")}
            className={
              currentSection === "bao-buns-container"
                ? "nav-category active"
                : "nav-category"
            }
          >
            BAO BUNS
          </p>
        </div>
        <div className="menu-nav-category-container">
          <p
            onClick={() => scrollToSection("cocktails-container")}
            className={
              currentSection === "cocktails-container"
                ? "nav-category active"
                : "nav-category"
            }
          >
            COCKTAILS
          </p>
        </div>
        <div className="menu-nav-category-container">
          <p
            onClick={() => scrollToSection("beer-container")}
            className={
              currentSection === "beer-container"
                ? "nav-category active"
                : "nav-category"
            }
          >
            BEER
          </p>
        </div>
        <div className="menu-nav-category-container">
          <p
            onClick={() => scrollToSection("spirits-container")}
            className={
              currentSection === "spirits-container"
                ? "nav-category active"
                : "nav-category"
            }
          >
            SPIRITS
          </p>
        </div>
        <div className="menu-nav-category-container">
          <p
            onClick={() => scrollToSection("kampai-container")}
            className={
              currentSection === "kampai-container"
                ? "nav-category active"
                : "nav-category"
            }
          >
            KAMPAI
          </p>
        </div>
        <div className="menu-nav-category-container">
          <p
            onClick={() => scrollToSection("soft-drinks-container")}
            className={
              currentSection === "soft-drinks-container"
                ? "nav-category active"
                : "nav-category"
            }
          >
            SOFT DRINKS
          </p>
        </div>
      </div>
      <div className="nav-replacement"></div>
      <div className="menu-cards-container">
        <section className="menu-item-container" id="snacks-container">
          <h1 className="category">SNACKS</h1>
          <ul>
            {snacksMenu.map((dish, index) => (
              <DishCard key={index} dish={dish} />
            ))}
          </ul>
        </section>
        <section className="menu-item-container" id="small-plates-container">
          <h1 className="category">SMALL PLATES</h1>
          <ul>
            {smallPlatesMenu.map((dish, index) => (
              <DishCard key={index} dish={dish} />
            ))}
          </ul>
        </section>
        <section className="menu-item-container" id="bao-buns-container">
          <h1 className="category">BAO BUNS</h1>
          <ul>
            {baoMenu.map((dish, index) => (
              <DishCard key={index} dish={dish} />
            ))}
          </ul>
        </section>
        <section className="menu-item-container" id="cocktails-container">
          <h1 className="category">COCKTAILS</h1>
          <ul>
            {cocktailsMenu.map((drink, index) => (
              <DrinkCard key={index} drink={drink} />
            ))}
          </ul>
        </section>
        <section className="menu-item-container" id="beer-container">
          <h1 className="category">BEER</h1>
          <ul>
            {beerMenu.map((drink, index) => (
              <DrinkCard key={index} drink={drink} />
            ))}
          </ul>
        </section>
        <section className="menu-item-container" id="spirits-container">
          <h1 className="category">SPIRITS</h1>
          <ul>
            {spiritsMenu.map((drink, index) => (
              <DrinkCard key={index} drink={drink} />
            ))}
          </ul>
        </section>
        <section className="menu-item-container" id="kampai-container">
          <h1 className="category">KAMPAI</h1>
          <ul>
            {kampaiMenu.map((drink, index) => (
              <DrinkCard key={index} drink={drink} />
            ))}
          </ul>
        </section>
        <section className="menu-item-container" id="soft-drinks-container">
          <h1 className="category">SOFT DRINKS</h1>
          <ul>
            {kampaiMenu.map((drink, index) => (
              <DrinkCard key={index} drink={drink} />
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default MenuLandscape;
