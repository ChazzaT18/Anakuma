import { useEffect } from "react";

const AboutUsPage = ({setCurrentPage, currentPage}) => {

    useEffect(() => {
        setCurrentPage('about-us');
      }, []);

    return (
        <h1>About Us</h1>
    )

}

export default AboutUsPage