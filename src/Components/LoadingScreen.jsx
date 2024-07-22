// LoadingOverlay.js
import React from "react";
import "../../CSS/LoadingScreen.css";

const LoadingScreen = (props) => {
    return (
      <div className="loader-container">
        <img
          src="/Images/badger-white.png"
          className="halisco-skull-logo"
          alt="halisco-skull-logo"
        />
        <div className="bouncing-loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  };
  
  export default LoadingScreen;
  