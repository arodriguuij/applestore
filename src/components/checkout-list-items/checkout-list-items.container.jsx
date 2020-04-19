import React from "react";
import CheckoutItemContainer from "../../containers/checkout-item/checkout-item.container";

const CheckoutListItems = ({ checkout }) =>
  checkout.map((item, index) => (
    <CheckoutItemContainer key={index} {...item} fullInformation={true} />
  ));

export default CheckoutListItems;
