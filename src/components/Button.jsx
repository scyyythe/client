import React from "react";

const Button = ({ text, onClick, className, disabled }) => {
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "10px 20px",
        backgroundColor: " #345b6e",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: disabled ? "not-allowed" : "pointer",
        fontSize: "13px",
      }}
    >
      {text}
    </button>
  );
};

export default Button;
