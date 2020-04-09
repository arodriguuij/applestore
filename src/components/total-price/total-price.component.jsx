import React from "react";
import { connect } from "react-redux";
import { selectorTotalPrice } from "../../redux/checkout/checkout.selectors";
import "./total-price-styles.css";

const TotalPrice = ({totalPrice}) => {
  return (
    <div className="checkout-total">
      <span>TOTAL: {totalPrice.toFixed(2)}€</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  totalPrice: selectorTotalPrice(state),
});

export default connect(mapStateToProps)(TotalPrice);
