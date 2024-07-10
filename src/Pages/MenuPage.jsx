import { useEffect } from "react";

const MenuPage = ({setCurrentPage, currentPage}) => {

    useEffect(() => {
        setCurrentPage('menu');
      }, []);

    return (
        <h1>MENU</h1>
    )

}

export default MenuPage