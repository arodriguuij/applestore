import React from "react";
import "./checkout-item-decrement.styles.css";

const CheckoutItemDecrement = ({ onDecrementItem, id}) => (
  <div className="checkout-item-arrow" onClick={() => onDecrementItem(id)}>
    &#10094;
  </div>
);

export default CheckoutItemDecrement;
