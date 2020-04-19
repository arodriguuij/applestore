import React from "react";
import "./buy-button.styles.css";

const BuyButton = ({ text }) => (
  <button data-test="buy-button" className="buy-button">
    {text}
  </button>
);

export default React.memo(BuyButton);
