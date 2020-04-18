import React, { Fragment, useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import Breadcrum from "../breadcrumb/breadcrumb.component";
import "./checkout-form-page.styles.css";

const CheckoutageForm = ({
  defaultEmail,
  defaultName,
  userId,
  checkoutCollection,
  totalPrice,
  onFetchBuyStart,
}) => {
  const [email] = useState(defaultEmail ? defaultEmail : "");
  const [userName] = useState(defaultName ? defaultName : "");
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [zipcode, setZipcode] = useState("");

  const [countryErrors, setCountryErrors] = useState("");
  const [streetErrors, setStreetErrors] = useState("");
  const [zipcodeErrors, setZipcodeErrors] = useState("");

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

  return (
    <Fragment>
      <Breadcrum />
      <div className="checkout-form-container">
        <h2 className="checkout-form-title">
          Fill up the from to finish the purchase
        </h2>
        <form onSubmit={onSubmitHandler}>
          <FormInput
            type="text"
            name="name"
            value={userName}
            required
            readOnly
            label="name"
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            required
            readOnly
            label="email"
          />
          <FormInput
            type="text"
            name="country"
            value={country}
            onChange={onChangeHandler}
            required
            label="country"
            error={countryErrors}
          />
          <FormInput
            type="text"
            name="street"
            value={street}
            onChange={onChangeHandler}
            required
            label="street"
            error={streetErrors}
          />
          <FormInput
            type="text"
            name="zipcode"
            value={zipcode}
            onChange={onChangeHandler}
            required
            label="zipcode"
            error={zipcodeErrors}
          />
          <div className="checkout-form-button">
            <div className="checkout-form-price">Price: {totalPrice}€</div>
            <CustomButton type="submit" google>
              Buy
            </CustomButton>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default CheckoutageForm;
