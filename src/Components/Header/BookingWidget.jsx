import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const BookingWidget = () => {
  useEffect(() => {
    const scriptId = "ft-booking-widget-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "https://booking.favouritetable.com/widget/ft_bookingwidgetv1.js";
      script.type = "text/javascript";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const showBookingWidget = () => {
      window.ft_showbookingwidget("ft_bookingwidget1931");
  };  

  const portalContent = <div id="ft_bookingwidget1931" sitecode="1931"></div>;

  return (
    <div
      className="booking-container"
      id='booking-button-container'
      onClick={(e) => {
        e.preventDefault();
        document.getElementById("booking-widget-portal").style.display = "flex";
        showBookingWidget();
      }}
    >
      <h3 className="booking-button">BOOK NOW</h3>
      {ReactDOM.createPortal(
        portalContent,
        document.getElementById("booking-widget-portal")
      )}
    </div>
  );
};

export default BookingWidget;
