import React from "react";
import "./checkout-total-price.styles.css";

const CheckoutTotalPrice = ({ totalPrice }) => (
  <div className="checkout-total-price">
    <span>TOTAL: {totalPrice.toFixed(2)}€</span>
  </div>
);

export default CheckoutTotalPrice;
