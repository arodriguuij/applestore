import React from "react";
import CheckoutTableHeader from "../checkout-table-header/checkout-table-header.component";
import MyOrdersListItems from '../my-orders-list-items/my-orders-list-items.component';
import MyOrdersTotalPrice from '../my-orders-total-price/my-orders-total-price.component';
import "./my-orders-table.styles.css";

const MyOrdersTable = ({order}) => {
  const itemTableHeader = ["Products", "Description", "Quantity", "Price"];
  debugger;
  return (
    <div className="my-orders-page">
      <CheckoutTableHeader itemTableHeader={itemTableHeader}/>
      <MyOrdersListItems items={order.items} fullInformation={false}/>
      <MyOrdersTotalPrice totalPrice={order.totalPrice}/>
    </div>
  );
};

export default MyOrdersTable;
