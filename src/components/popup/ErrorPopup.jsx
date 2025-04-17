import React from "react";
import "../../styles/Components.css";

const ErrorPopup = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="error-popup-overlay">
      <div className="error-popup-box">
        <p>{message}</p>
        <button className="error-popup-close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ErrorPopup;
