import React from "react";
import CheckoutTotalPrice from "../checkout-total-price/checkout-total-price.component";
import CheckoutListItems from "../../containers/checkout-list-items/checkout-list-items.container";
import CheckoutTableHeader  from '../checkout-table-header/checkout-table-header.component';
import "./checkout-table.styles.css";

const CheckoutTable = () => {
  return (
    <div className="checkout-page">
      <CheckoutTableHeader />
      <CheckoutListItems />
      <CheckoutTotalPrice />
    </div>
  );
};

export default CheckoutTable;
