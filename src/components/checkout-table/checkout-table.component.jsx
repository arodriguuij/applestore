import React from "react";
import CheckoutTotalPriceContainer from "../../containers/checkout-total-price/checkout-total-price.container";
import CheckoutListItemsContainer from "../../containers/checkout-list-items/checkout-list-items.container";
import CheckoutTableHeader from "../checkout-table-header/checkout-table-header.component";
import "./checkout-table.styles.css";

const CheckoutTable = () => {
  const itemTableHeader = [
    "Products",
    "Description",
    "Quantity",
    "Price",
    "Remove",
  ];
  return (
    <div className="checkout-page">
      <CheckoutTableHeader itemTableHeader={itemTableHeader} />
      <CheckoutListItemsContainer />
      <CheckoutTotalPriceContainer />
    </div>
  );
};

export default CheckoutTable;
