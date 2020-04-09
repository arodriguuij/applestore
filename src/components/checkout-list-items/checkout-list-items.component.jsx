import React from "react";
import { selectorCheckout } from "../../redux/checkout/checkout.selectors";
import { connect } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.coponent";
import "./checkout-list-items.stles.css";

const CheckoutListItems = ({checkout}) => {
  return checkout.map((item, index) => (
    <CheckoutItem
      key={index}
      item={item}
    />
  ));
};

const mapStateToProps = (state) => ({
  checkout: selectorCheckout(state),
});

export default connect(mapStateToProps)(CheckoutListItems);
