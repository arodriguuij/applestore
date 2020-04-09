import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { setBreadcrumb } from "../../redux/breadcrumb/breadcrumb.actions";
import Breadcrumb from "../../components/breadcrumb/breadcrumb.component";
import TotalPrice from "../../components/total-price/total-price.component";
import CheckoutListItems from "../../components/checkout-list-items/checkout-list-items.component";
import "./checkout.styles.css";

const CheckoutPage = ({ onSetBreadcrumb }) => {
  useEffect(() => {
    onSetBreadcrumb("Checkout");
  }, [onSetBreadcrumb]);

  return (
    <Fragment>
      <Breadcrumb />
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="checkout-header-block">
            <span>Products</span>
          </div>
          <div className="checkout-header-block">
            <span>Description</span>
          </div>
          <div className="checkout-header-block">
            <span>Quantity</span>
          </div>
          <div className="checkout-header-block">
            <span>Price</span>
          </div>
          <div className="checkout-header-block">
            <span>Remove</span>
          </div>
        </div>
        <CheckoutListItems />
        <TotalPrice />
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSetBreadcrumb: (text) => dispatch(setBreadcrumb(text)),
});
export default connect(null, mapDispatchToProps)(CheckoutPage);
