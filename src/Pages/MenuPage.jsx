import { useEffect, useState } from "react";
import MenuLandscape from "../Components/MenuPage/MenuLandscape";
import MenuPortrait from "../Components/MenuPage/MenuPortrait";
import { getFullMenu } from "../utils";
import Footer from "../Components/Footer/Footer";
import LoadingScreen from "../Components/LoadingScreen";
import "../../CSS/MenuPage.css";

const MenuPage = ({ setCurrentPage, currentPage }) => {
  const [showLoading, setShowLoading] = useState(true);
  const [smallPlatesMenu, setSmallPlatesMenu] = useState([]);
  const [snacksMenu, setSnacksMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cocktailsMenu, setCocktailsMenu] = useState([]);
  const [beerMenu, setBeerMenu] = useState([]);
  const [spiritsMenu, setSpiritsMenu] = useState([]);
  const [kampaiMenu, setKampaiMenu] = useState([]);
  const [softDrinksMenu, setSoftDrinksMenu] = useState([]);
  const [baoMenu, setBaoMenu] = useState([]);
  const [isPortrait, setIsPortrait] = useState(
    window.innerHeight > window.innerWidth
  );

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 1);
      setShowLoading(false);
    }, 1250);

    setCurrentPage("menu");
    window.scrollTo(0, 1);
  }, [currentPage]);

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
    getFullMenu()
      .then((tableData) => {
        const tables = {
          Anakuma_snacks: setSnacksMenu,
          Anakuma_bao_buns: setBaoMenu,
          Anakuma_small_plates: setSmallPlatesMenu,
          Anakuma_cocktails: setCocktailsMenu,
          Anakuma_beers: setBeerMenu,
          Anakuma_spirits: setSpiritsMenu,
          Anakuma_kampai: setKampaiMenu,
          Anakuma_soft_drinks: setSoftDrinksMenu,
        };

        tableData.forEach((table) => {
          const setter = tables[table.tableName];
          if (setter) {
            setter(table.data);
          }
        });

        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data from all tables:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {showLoading && <LoadingScreen />}
      {isPortrait ? (
        <MenuPortrait
          snacksMenu={snacksMenu}
          smallPlatesMenu={smallPlatesMenu}
          baoMenu={baoMenu}
          cocktailsMenu={cocktailsMenu}
          beerMenu={beerMenu}
          spiritsMenu={spiritsMenu}
          kampaiMenu={kampaiMenu}
          softDrinksMenu={softDrinksMenu}
        />
      ) : (
        <MenuLandscape
          snacksMenu={snacksMenu}
          smallPlatesMenu={smallPlatesMenu}
          baoMenu={baoMenu}
          cocktailsMenu={cocktailsMenu}
          beerMenu={beerMenu}
          spiritsMenu={spiritsMenu}
          kampaiMenu={kampaiMenu}
          softDrinksMenu={softDrinksMenu}
        />
      )}
      <Footer />
    </>
  );
};

export default MenuPage;
