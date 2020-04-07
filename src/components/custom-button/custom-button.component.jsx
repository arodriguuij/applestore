import React from "react";
import "./custom-button.styles.css";

const CustomButton = (props) => {
  return (
    <button
      className={`customButton ${props.inverted && "inverted"} ${props.classes && 'active'}`}
      onClick={props.action}
    >
      {props.children}
    </button>
  );
};

export default CustomButton;
