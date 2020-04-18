import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setBreadcrumb } from "../../redux/breadcrumb/breadcrumb.actions";
import { selectorNumberItems } from "../../redux/checkout/checkout.selectors";
import { selectorAuthenticationByKey } from "../../redux/authentication/authentication.selector";
import CheckoutPage from "../../components/checkout-page/checkout-page.component";
import { purchaseInit } from "../../redux/buy/buy.actions";

const CheckoutPageContainer = ({
  onSetBreadcrumb,
  isSignedIn,
  onPurchaseInit,
  numItems,
}) => {
  useEffect(() => {
    onSetBreadcrumb("Checkout 1/2");
  }, [onSetBreadcrumb]);

  return (
    <CheckoutPage
      isSignedIn={isSignedIn}
      numItems={numItems}
      onPurchaseInit={onPurchaseInit}
    />
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

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPageContainer);
