import React from "react";
import "./SerchInput.css";

const SerchInput = ({ onChange, place }) => {
  return (
    <>
      <input className="SerchInput" placeholder={place} onChange={onChange} />
    </>
  );
};

export default SerchInput;
