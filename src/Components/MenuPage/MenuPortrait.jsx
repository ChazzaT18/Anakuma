import { useEffect, useState, useRef } from "react";
import DishCardPortrait from "./DishCardPortrait";

const MenuPortrait = ({
  snacksMenu,
  baoMenu,
  smallPlatesMenu
}) => {
  const navRef = useRef(null);
  const navReplacementRef = useRef(null);
  const [categoryMenuVisible, setCategoryMenuVisible] = useState(false);

  const veganSymbol = (
    <img
      className="vegan-symbol"
      src="/Images/MenuPage/vg-black.png"
      alt="Vegan"
    />
  );

  const veganOptionSymbol = (
    <img
      className="vegan-option-symbol"
      src="/Images/MenuPage/vgo-black.png"
      alt="Vegan option"
    />
  );

  const vegetarianSymbol = (
    <img
      className="vegetarian-symbol"
      src="https://halisco.s3.eu-west-2.amazonaws.com/letter-v.png"
      alt="Vegetarian"
    />
  );

  const glutenFreeSymbol = (
    <img
      className="gluten-free-symbol"
      src="https://halisco.s3.eu-west-2.amazonaws.com/gluten-free.png"
      alt="Gluten Free"
    />
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
        top: section.offsetTop - window.innerHeight * 0.22,
        behavior: "smooth"
      });
    }
  };

  const handleClick = (section) => {
    handleCategoryMenuOnClick();
    scrollToSection(section);
};

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
            <h2 className="menu-categories" onClick={() => handleClick("snacks-container")} >SNACKS</h2>
            <h2 className="menu-categories" onClick={() => handleClick("small-plates-container")}>SMALL PLATES</h2>
            <h2 className="menu-categories" onClick={() => handleClick("tacos-container")}>BAO BUNS</h2>
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
      <div className="nav-replacement" ref={navReplacementRef}></div>
      <section id="snacks-container" className="snacks-container">
        <h1 className="category">SNACKS</h1>
        <ul>
          {snacksMenu.map((dish, index) => (
            <DishCardPortrait key={index} dish={dish} />
          ))}
        </ul>
      </section>
      <section id="small-plates-container" className="small-plates-container">
        <h1 className="category">SMALL PLATES</h1>
        <ul>
          {smallPlatesMenu.map((dish, index) => (
            <DishCardPortrait key={index} dish={dish} />
          ))}
        </ul>
      </section>
      <section className="tacos-container" id="tacos-container">
        <h1 className="category">BAO BUNS</h1>
        <ul>
          {baoMenu.map((dish, index) => (
            <DishCardPortrait key={index} dish={dish} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default MenuPortrait;
