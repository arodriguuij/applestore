import React from "react";
import "./checkout-item-remove.styles.css";

const CheckoutItemRemove = ({ onRemoveItem, id }) => (
  <div className="checkout-item-remove-button" onClick={() => onRemoveItem(id)}>
    &#10005;
  </div>
);

export default CheckoutItemRemove;
