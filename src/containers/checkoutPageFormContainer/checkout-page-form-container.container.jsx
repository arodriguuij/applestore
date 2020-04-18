import React, { useEffect } from "react";
import { selectorAuthenticationByKeyAndNestedKey } from "../../redux/authentication/authentication.selector";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { setBreadcrumb } from "../../redux/breadcrumb/breadcrumb.actions";
import { selectorBuyByKey } from "../../redux/buy/buy.selectors";
import Spinner from "../../components/spinner/spinner.component";
import { purgeCheckoutCollection } from "../../redux/checkout/checkout.actions";
import ErrorPage from "../../components/error-page/error-page.component";
import CheckoutFormPage from "../../components/checkout-form-page/checkout-form-page.component";
import {
  selectorCheckout,
  selectorTotalPrice,
} from "../../redux/checkout/checkout.selectors";
import { fetchBuyStart } from "../../redux/buy/buy.actions";

const CheckoutageFormContainer = ({
  defaultEmail,
  defaultName,
  onSetBreadcrumb,
  checkoutCollection,
  totalPrice,
  onFetchBuyStart,
  userId,
  loading,
  error,
  purchased,
  onPurgeCheckoutCollection,
}) => {
  useEffect(() => {
    onSetBreadcrumb("Checkout 2/2");
    return () => {
      if (purchased && !loading) onPurgeCheckoutCollection();
    };
  }, [onSetBreadcrumb, onPurgeCheckoutCollection, loading, purchased]);

  let content;
  if (purchased) content = <Redirect to="/myorders" />;
  else {
    content = loading ? (
      <Spinner />
    ) : (
      <CheckoutFormPage
        defaultEmail={defaultEmail}
        defaultName={defaultName}
        userId={userId}
        checkoutCollection={checkoutCollection}
        totalPrice={totalPrice}
        onFetchBuyStart={onFetchBuyStart}
      />
    );
  }

  if (error === true) {
    content = (
      <ErrorPage
        text={"An error has occurred during the purchase process. Try again"}
      />
    );
  }
  return content;
};

const maptStateToProps = (state) => ({
  defaultEmail: selectorAuthenticationByKeyAndNestedKey(
    "userBasicProfile",
    "email"
  )(state),
  defaultName: selectorAuthenticationByKeyAndNestedKey(
    "userBasicProfile",
    "name"
  )(state),
  userId: selectorAuthenticationByKeyAndNestedKey(
    "userBasicProfile",
    "id"
  )(state),
  checkoutCollection: selectorCheckout(state),
  totalPrice: selectorTotalPrice(state),
  loading: selectorBuyByKey("loading")(state),
  error: selectorBuyByKey("error")(state),
  purchased: selectorBuyByKey("purchased")(state),
  data: selectorBuyByKey("data")(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSetBreadcrumb: (text) => dispatch(setBreadcrumb(text)),
  onFetchBuyStart: (data) => dispatch(fetchBuyStart(data)),
  onPurgeCheckoutCollection: () => dispatch(purgeCheckoutCollection()),
});
export default connect(
  maptStateToProps,
  mapDispatchToProps
)(CheckoutageFormContainer);
