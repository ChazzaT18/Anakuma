import { useEffect } from "react";

const ContactUsPage = ({setCurrentPage, currentPage}) => {
    
    useEffect(() => {
        setCurrentPage('contact-us');
      }, []);

    return (
        <h1>Contact Us</h1>
    )

}

export default ContactUsPage