import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setBreadcrumb } from "../../redux/breadcrumb/breadcrumb.actions";
import Breadcrumb from "../../components/breadcrumb/breadcrumb.component";
import CheckoutTable from "../../components/checkout-table/checkout-table.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { selectorNumberItems } from "../../redux/checkout/checkout.selectors";
import { selectorAuthenticationByKey } from "../../redux/authentication/authentication.selector";
import { purchaseInit } from "../../redux/buy/buy.actions";

const CheckoutPage = ({
  onSetBreadcrumb,
  isSignedIn,
  onPurchaseInit,
  numItems,
}) => {
  useEffect(() => {
    onSetBreadcrumb("Checkout 1/2");
  }, [onSetBreadcrumb]);

  const button =
    isSignedIn && numItems !== 0 ? (
      <CustomButton action={onPurchaseInit} google>
        Continue
      </CustomButton>
    ) : !isSignedIn && numItems !== 0 ? (
      <CustomButton google disabled>
        Please Sign in to continue
      </CustomButton>
    ) : isSignedIn && numItems === 0 ? (
      <CustomButton google disabled>
        Add items
      </CustomButton>
    ) : null;

  
  return (
    <Fragment>
      <Breadcrumb />
      <CheckoutTable/>
      <Link to="/checkoutForm">{button}</Link>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  isSignedIn: selectorAuthenticationByKey("isSignedIn")(state),
  numItems: selectorNumberItems(state),
});
const mapDispatchToProps = (dispatch) => ({
  onSetBreadcrumb: (text) => dispatch(setBreadcrumb(text)),
  onPurchaseInit: () => dispatch(purchaseInit()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
