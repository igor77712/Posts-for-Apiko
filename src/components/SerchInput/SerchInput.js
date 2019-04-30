import React from "react";
import "./SerchInput.css";

const SerchInput = ({ onChange, place }) => {
  return (
    <React.Fragment>
      <input className="SerchInput" placeholder={place} onChange={onChange} />
    </React.Fragment>
  );
};

export default SerchInput;
