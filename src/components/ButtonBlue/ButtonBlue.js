import React from "react";
import "./ButtonBlue.css";

const ButtonMore = ({ text, onClick, ...props }) => {
  return (
    <button className="ButtonBlue" onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonMore;
