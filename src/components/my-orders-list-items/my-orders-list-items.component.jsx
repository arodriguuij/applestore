import React from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.coponent";

const MyOrdersListItems = ({ items }) =>
  items.map((item, index) => (
    <CheckoutItem key={index} {...item} fullInformation={false} />
  ));

export default MyOrdersListItems;
