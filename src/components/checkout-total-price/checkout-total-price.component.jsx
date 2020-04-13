import React from "react";
import { connect } from "react-redux";
import { selectorTotalPrice } from "../../redux/checkout/checkout.selectors";
import "./checkout-total-price.styles.css";

const CheckoutTotalPrice = ({totalPrice}) => {
  return (
    <div className="checkout-total-price">
      <span>TOTAL: {totalPrice.toFixed(2)}€</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  totalPrice: selectorTotalPrice(state),
});

export default connect(mapStateToProps)(CheckoutTotalPrice);
