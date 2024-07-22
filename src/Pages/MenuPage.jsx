import { useEffect, useState } from "react";
import MenuLandscape from "../Components/MenuPage/MenuLandscape";
import MenuPortrait from "../Components/MenuPage/MenuPortrait";
import { getFullMenu } from "../utils";
import Footer from "../Components/Footer/Footer";
import "../../CSS/MenuPage.css";

const MenuPage = ({ setCurrentPage, currentPage }) => {
  const [showLoading, setShowLoading] = useState(true);
  const [smallPlatesMenu, setSmallPlatesMenu] = useState([]);
  const [snacksMenu, setSnacksMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [baoMenu, setBaoMenu] = useState([]);
  const [isPortrait, setIsPortrait] = useState(
    window.innerHeight > window.innerWidth
  );

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      setShowLoading(false);
    }, 1250);

    setCurrentPage("menu");
    window.scrollTo(0, 0);
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

  console.log(smallPlatesMenu);

  return (
    <>
      {isPortrait ? (
        <MenuPortrait
          snacksMenu={snacksMenu}
          smallPlatesMenu={smallPlatesMenu}
          baoMenu={baoMenu}
        />
      ) : (
        <MenuLandscape
          snacksMenu={snacksMenu}
          smallPlatesMenu={smallPlatesMenu}
          baoMenu={baoMenu}
        />
      )}
      <Footer />
    </>
  );
};

export default MenuPage;
