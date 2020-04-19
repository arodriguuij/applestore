import React, { useEffect } from "react";
import { selectorAuthenticationByKeyAndNestedKey } from "../../redux/authentication/authentication.selector";
import { connect } from "react-redux";
import { setBreadcrumb } from "../../redux/breadcrumb/breadcrumb.actions";
import { selectorBuyByKey } from "../../redux/buy/buy.selectors";
import { purgeCheckoutCollection } from "../../redux/checkout/checkout.actions";
import CheckoutPageForm from "../../components/checkout-form-page/checkout-form-page.component";
import {
  selectorCheckout,
  selectorTotalPrice,
} from "../../redux/checkout/checkout.selectors";
import { fetchBuyStart } from "../../redux/buy/buy.actions";

const CheckoutageFormContainer = ({
  onSetBreadcrumb,
  loading,
  purchased,
  onPurgeCheckoutCollection,
  defaultEmail,
  defaultName,
  userId,
  checkoutCollection,
  totalPrice,
  onFetchBuyStart,
  error,
}) => {
  useEffect(() => {
    onSetBreadcrumb("Checkout 2/2");
    return () => {
      if (purchased && !loading) onPurgeCheckoutCollection();
    };
  }, [onSetBreadcrumb, onPurgeCheckoutCollection, loading, purchased]);

  return (
    <CheckoutPageForm
      defaultEmail={defaultEmail}
      defaultName={defaultName}
      userId={userId}
      checkoutCollection={checkoutCollection}
      totalPrice={totalPrice}
      onFetchBuyStart={onFetchBuyStart}
      loading={loading}
      error={error}
      purchased={purchased}
    />
  );
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
