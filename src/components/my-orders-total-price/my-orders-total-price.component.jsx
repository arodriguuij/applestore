import React from "react";
import "./my-orders-total-price.styles.css";

const MyOrdersTotalPrice = ({ totalPrice }) => (
  <div className="my-orders-total-price">
    <span>TOTAL: {totalPrice.toFixed(2)}€</span>
  </div>
);

export default MyOrdersTotalPrice;
