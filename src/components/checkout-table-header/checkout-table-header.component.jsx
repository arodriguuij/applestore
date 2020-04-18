import React from "react";
import "./checkout-table-header.styles.css";

const CheckoutTableHeader = ({ itemTableHeader }) => (
  <div className="checkout-header">
    {itemTableHeader.map((item, index) => (
      <div key={index} className="checkout-header-block">
        <span>{item}</span>
      </div>
    ))}
  </div>
);

export default CheckoutTableHeader;
