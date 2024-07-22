import { useEffect, useState } from "react";
import LoadingScreen from "../Components/LoadingScreen";
import ContactUs from "../Components/HomePage/ContactUs";
import Footer from "../Components/Footer/Footer";
import FooterPortrait from "../Components/Footer/FooterPortrait";

const ContactUsPage = ({ setCurrentPage, currentPage }) => {
  const [showLoading, setShowLoading] = useState(true);
  const [isPortrait, setIsPortrait] = useState(
    window.innerHeight > window.innerWidth
  );

  console.log(currentPage);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      setShowLoading(false);
    }, 1250);
    setCurrentPage("contact-us");
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <>
      {showLoading && <LoadingScreen />}
      <ContactUs currentPage={currentPage}/>
      {isPortrait ? <FooterPortrait /> : <Footer />}
    </>
  );
};

export default ContactUsPage;
