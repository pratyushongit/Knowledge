import React from "react";
import "./Button.css";

const Button = ({ button }) => {
  return (
    <button className="button" onClick={() => console.log("clicked")}>
      {button}
    </button>
  );
};

export default Button;
