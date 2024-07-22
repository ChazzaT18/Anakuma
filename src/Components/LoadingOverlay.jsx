import React from "react";
import "../../CSS/LoadingOverlay.css";

const LoadingOverlay = ({ loading }) => {
    return (
        <div className={`loading-overlay ${loading ? "visible" : ""}`}>
            <img
                className="loading-logo"
                src="/Images/anakuma-white.png"
                alt="Halisco Logo"
            />
        </div>
    );
};

export default LoadingOverlay;
