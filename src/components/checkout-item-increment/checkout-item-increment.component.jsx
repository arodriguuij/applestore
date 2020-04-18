import React from "react";
import "./checkout-item-increment.styles.css";

const CheckoutItemIncrement = ({ onIncrementItem, id }) => (
  <div className="checkout-item-arrow" onClick={() => onIncrementItem(id)}>
    &#10095;
  </div>
);

export default CheckoutItemIncrement;
