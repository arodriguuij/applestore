import React from "react";
import { selectorCheckout } from "../../redux/checkout/checkout.selectors";
import { connect } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.coponent";

const CheckoutListItems = ({ checkout }) =>
  checkout.map((item, index) => (
    <CheckoutItem key={index} item={item} fullInformation={true} />
  ));

const mapStateToProps = (state) => ({
  checkout: selectorCheckout(state),
});

export default connect(mapStateToProps)(CheckoutListItems);
