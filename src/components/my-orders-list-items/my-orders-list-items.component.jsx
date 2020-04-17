import React from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.coponent";

const MyOrderListItems = ({ items, fullInformation }) => {
  return items.map((item, index) => (
    <CheckoutItem
      key={index}
      item={item}
      fullInformation={fullInformation}
    />
  ));
  return null;
};



export default MyOrderListItems;
