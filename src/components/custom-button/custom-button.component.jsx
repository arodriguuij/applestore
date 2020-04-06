import React from "react";
import "./custom-button.styles.css";

const CustomButton = (props) => {
  return <button className="customButton" onClick={props.addItem}>{props.children}</button>;
};

export default CustomButton;
