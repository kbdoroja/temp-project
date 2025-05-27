import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

const SuccessPopup = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="success-popup-container">
      <div className="success-popup">
        <FaCheckCircle className="success-icon" />
        <p>{message}</p>
      </div>
    </div>
  );
};

export default SuccessPopup;