import React from "react";
import CheckoutItemContainer from "../../containers/checkout-item/checkout-item.container";

const MyOrdersListItems = ({ items }) =>
  items.map((item, index) => (
    <CheckoutItemContainer key={index} {...item} fullInformation={false} />
  ));

export default MyOrdersListItems;
