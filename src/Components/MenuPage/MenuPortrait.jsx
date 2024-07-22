import { useEffect, useState, useRef } from "react";
import DishCardPortrait from "./DishCardPortrait";
import DrinkCardPortrait from "./DrinkCardPortrait";
import LoadingScreen from "../LoadingScreen";
import useImagesLoaded from "../useImagesLoaded";

const MenuPortrait = ({
  snacksMenu,
  baoMenu,
  smallPlatesMenu,
  cocktailsMenu,
  beerMenu,
  spiritsMenu,
  kampaiMenu,
  softDrinksMenu
}) => {
  const navRef = useRef(null);
  const navReplacementRef = useRef(null);
  const [categoryMenuVisible, setCategoryMenuVisible] = useState(false);

  const imageUrls = [
    "/Images/MenuPage/vg-black.png",
    "/Images/MenuPage/vgo-black.png",
    "https://halisco.s3.eu-west-2.amazonaws.com/letter-v.png",
    "https://halisco.s3.eu-west-2.amazonaws.com/gluten-free.png",
    "/Images/MenuPage/menu-page-portrait.jpg"
  ];

  const imagesLoaded = useImagesLoaded(imageUrls);

  const veganSymbol = (
    <img className="vegan-symbol" src="/Images/MenuPage/vg-black.png" alt="Vegan" />
  );

  const veganOptionSymbol = (
    <img className="vegan-option-symbol" src="/Images/MenuPage/vgo-black.png" alt="Vegan option" />
  );

  const vegetarianSymbol = (
    <img className="vegetarian-symbol" src="https://halisco.s3.eu-west-2.amazonaws.com/letter-v.png" alt="Vegetarian" />
  );

  const glutenFreeSymbol = (
    <img className="gluten-free-symbol" src="https://halisco.s3.eu-west-2.amazonaws.com/gluten-free.png" alt="Gluten Free" />
  );

  useEffect(() => {
    const handleScrollDown = () => {
      const stickyNav = navRef.current;
      if (stickyNav) {
        const sticky = stickyNav.offsetTop;
        if (window.scrollY >= sticky - window.innerHeight * 0.084) {
          const navReplacement = document.querySelector(".nav-replacement");
          stickyNav.classList.add("sticky");
          navReplacement.style.height = `${stickyNav.offsetHeight - 10}px`;
        }
      }
    };

    const handleScrollUp = () => {
      const stickyNav = navRef.current;
      const navReplacement = document.querySelector(".nav-replacement");
      if (stickyNav && navReplacement) {
        const isAboveReplacement =
          window.scrollY <=
          navReplacement.offsetTop - window.innerHeight * 0.084;
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
  }, []);

  const handleCategoryMenuOnClick = (e) => {
    setCategoryMenuVisible((prevVisible) => {
      if (!prevVisible) {
        // Menu is being opened
        document.body.style.overflow = 'hidden';
      } else {
        // Menu is being closed
        document.body.style.overflow = 'auto';
      }
      return !prevVisible;
    });
  };

  useEffect(() => {
    const adjustCategoriesPosition = () => {
      const categoryMenu = document.querySelector('.category-menu-open');
      if (categoryMenu) {
        const viewportHeight = window.innerHeight;
        categoryMenu.style.height = `${viewportHeight * 0.907}px`; // Corrected assignment
      }
    };

    adjustCategoriesPosition();
    window.addEventListener('resize', adjustCategoriesPosition);
    window.addEventListener('orientationchange', adjustCategoriesPosition);

    return () => {
      window.removeEventListener('resize', adjustCategoriesPosition);
      window.removeEventListener('orientationchange', adjustCategoriesPosition);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - window.innerHeight * 0.30,
        behavior: "smooth"
      });
    }
  };

  const handleClick = (section) => {
    handleCategoryMenuOnClick();
    scrollToSection(section);
  };

  if (!imagesLoaded) {
    return <LoadingScreen />;
  }

  return (
    <div className="menu-container">
      <div className={`category-menu-open ${categoryMenuVisible ? 'visible' : ''}`}>
        <div className="category-menu-nav">
          <p style={{ color: "white" }}>BROWSE BY CATEGORY</p>
          <div
            className="hamburger-menu-category"
            onClick={handleCategoryMenuOnClick}
          >
            <div className="bar-category"></div>
            <div className="bar-category"></div>
            <div className="bar-category"></div>
          </div>
        </div>
        <div className="menu-nav-categories">
          <h2 className="menu-categories" onClick={() => handleClick("snacks-container")}>SNACKS</h2>
          <h2 className="menu-categories" onClick={() => handleClick("small-plates-container")}>SMALL PLATES</h2>
          <h2 className="menu-categories" onClick={() => handleClick("bao-container")}>BAO BUNS</h2>
          <h2 className="menu-categories" onClick={() => handleClick("cocktails-container")}>COCKTAILS</h2>
          <h2 className="menu-categories" onClick={() => handleClick("beer-container")}>BEER</h2>
          <h2 className="menu-categories" onClick={() => handleClick("spirits-container")}>SPIRITS</h2>
          <h2 className="menu-categories" onClick={() => handleClick("kampai-container")}>KAMPAI</h2>
          <h2 className="menu-categories" onClick={() => handleClick("soft-drinks-container")}>SOFT DRINKS</h2>
        </div>
      </div>
      <img
        src="/Images/MenuPage/menu-page-portrait.jpg"
        alt="tequila and taco neon sign"
        className="menu-img"
      />
      <div className="menu-nav" ref={navRef} id="sticky-nav">
        <div className="menu-nav-items">
          <p style={{ color: "white" }}>BROWSE BY CATEGORY</p>
          <div
            className="hamburger-menu-category"
            onClick={handleCategoryMenuOnClick}
          >
            <div className="bar-category"></div>
            <div className="bar-category"></div>
            <div className="bar-category"></div>
          </div>
        </div>
        <div className="dietary-info">
          <div className="dietary-ting">
            <span className="dietary-signs">{veganSymbol}</span>
            <p style={{ margin: "1.5vw" }}>=</p>
            <p>VEGAN</p>
          </div>
          <div className="dietary-ting" style={{ marginLeft: "5vw" }}>
            <span className="dietary-signs">{veganOptionSymbol}</span>
            <p style={{ margin: "1.5vw" }}>=</p>
            <p>VEGAN OPTION</p>
          </div>
          {/* <div className="dietary-ting">
            <span className="dietary-signs">{vegetarianSymbol}</span>
            <p style={{ margin: "1.5vw" }}>=</p>
            <p>VEGETARIAN</p>
          </div> */}
          {/* <div className="dietary-ting">
            <span className="dietary-signs">{glutenFreeSymbol}</span>
            <p style={{ margin: "1.5vw" }}>=</p>
            <p>GLUTEN FREE</p>
          </div> */}
        </div>
      </div>
      <div className="nav-replacement"></div>
      <div className="menu-cards-container">
        <section className="menu-item-container" id="snacks-container" style={{marginTop: "8vh"}}>
          <h1 className="category">SNACKS</h1>
          <ul>
            {snacksMenu.map((dish, index) => (
              <DishCardPortrait key={index} dish={dish} />
            ))}
          </ul>
        </section>
        <section className="menu-item-container" id="small-plates-container">
          <h1 className="category">SMALL PLATES</h1>
          <ul>
            {smallPlatesMenu.map((dish, index) => (
              <DishCardPortrait key={index} dish={dish} />
            ))}
          </ul>
        </section>
        <section className="menu-item-container" id="bao-container">
          <h1 className="category">BAO BUNS</h1>
          <ul>
            {baoMenu.map((dish, index) => (
              <DishCardPortrait key={index} dish={dish} />
            ))}
          </ul>
        </section>
        <section className="menu-item-container" id="cocktails-container">
          <h1 className="category">COCKTAILS</h1>
          <ul>
            {cocktailsMenu.map((drink, index) => (
              <DrinkCardPortrait key={index} drink={drink} />
            ))}
          </ul>
        </section>
        <section className="menu-item-container" id="beer-container">
          <h1 className="category">BEER</h1>
          <ul>
            {beerMenu.map((drink, index) => (
              <DrinkCardPortrait key={index} drink={drink} />
            ))}
          </ul>
        </section>
        <section className="menu-item-container" id="spirits-container">
          <h1 className="category">SPIRITS</h1>
          <ul>
            {spiritsMenu.map((drink, index) => (
              <DrinkCardPortrait key={index} drink={drink} />
            ))}
          </ul>
        </section>
        <section className="menu-item-container" id="kampai-container">
          <h1 className="category">KAMPAI</h1>
          <ul>
            {kampaiMenu.map((drink, index) => (
              <DrinkCardPortrait key={index} drink={drink} />
            ))}
          </ul>
        </section>
        <section className="menu-item-container" id="soft-drinks-container">
          <h1 className="category">SOFT DRINKS</h1>
          <ul>
            {softDrinksMenu.map((drink, index) => (
              <DrinkCardPortrait key={index} drink={drink} />
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default MenuPortrait;
