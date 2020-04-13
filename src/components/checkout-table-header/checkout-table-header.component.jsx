import React from "react";
import "./checkout-table-header.styles.css";

const CheckoutTableHeader = () => {
  return (
    <div className="checkout-header">
      <div className="checkout-header-block">
        <span>Products</span>
      </div>
      <div className="checkout-header-block">
        <span>Description</span>
      </div>
      <div className="checkout-header-block">
        <span>Quantity</span>
      </div>
      <div className="checkout-header-block">
        <span>Price</span>
      </div>
      <div className="checkout-header-block">
        <span>Remove</span>
      </div>
    </div>
  );
};

export default CheckoutTableHeader;
