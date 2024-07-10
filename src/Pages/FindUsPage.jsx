import { useEffect } from "react";

const FindUsPage = ({setCurrentPage, currentPage}) => {

    useEffect(() => {
        setCurrentPage('find-us');
      }, []);

    return (
        <h1>Find Us</h1>
    )

}

export default FindUsPage