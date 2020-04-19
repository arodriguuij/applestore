import React, { useEffect, useState } from "react";
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
  const [email] = useState(defaultEmail ? defaultEmail : "");
  const [userName] = useState(defaultName ? defaultName : "");
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [zipcode, setZipcode] = useState("");

  const [countryErrors, setCountryErrors] = useState("");
  const [streetErrors, setStreetErrors] = useState("");
  const [zipcodeErrors, setZipcodeErrors] = useState("");

  useEffect(() => {
    onSetBreadcrumb("Checkout 2/2");
    return () => {
      if (purchased && !loading) onPurgeCheckoutCollection();
    };
  }, [onSetBreadcrumb, onPurgeCheckoutCollection, loading, purchased]);

  const regexZipCode = /^\d{5}(?:[-\s]\d{4})?$/;
  const regexStreet = /^[a-zA-Z0-9 ]+$/;
  const regexCountry = /[a-zA-Z ]{4,}/;

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    switch (name) {
      case "country":
        setCountryErrors(
          regexCountry.test(value)
            ? ""
            : "Country must contains at least 4 characters and only letters"
        );
        setCountry(value);
        break;
      case "street":
        setStreetErrors(
          value.length < 4 || !regexStreet.test(value) || value.length > 30
            ? "Country must contains more than 4 and less than 30 characters and only letters and numbers"
            : ""
        );
        setStreet(value);
        break;
      case "zipcode":
        setZipcodeErrors(
          regexZipCode.test(value) ? "" : "Zipcode must contains 5 digits"
        );
        setZipcode(value);
        break;
      default:
        break;
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const data = {
        items: checkoutCollection,
        orderData: {
          defaultEmail,
          defaultName,
          country,
          street,
          zipcode,
        },
        totalPrice,
        userId,
      };
      onFetchBuyStart(data);
      resetInputs();
    }
  };
  const validateForm = () => {
    return (
      country.trim().length !== 0 &&
      street.trim().length !== 0 &&
      zipcode.trim().length !== 0 &&
      countryErrors.length === 0 &&
      streetErrors.length === 0 &&
      zipcodeErrors.length === 0
    );
  };
  const resetInputs = () => {
    setCountry("");
    setStreet("");
    setZipcode("");
  };
  return (
    <CheckoutPageForm
      email={email}
      userName={userName}
      country={country}
      street={street}
      zipcode={zipcode}
      countryErrors={countryErrors}
      streetErrors={streetErrors}
      zipcodeErrors={zipcodeErrors}
      onSubmitHandler={onSubmitHandler}
      onChangeHandler={onChangeHandler}
      totalPrice={totalPrice}
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
