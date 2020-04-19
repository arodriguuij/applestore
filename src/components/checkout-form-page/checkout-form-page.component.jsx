import React, { Fragment } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import BreadCrumbContainer from "../../containers/breadcrumb/breadcrumb.container";
import Spinner from "../../components/spinner/spinner.component";
import ErrorPage from "../../components/error-page/error-page.component";
import { Redirect } from "react-router-dom";

import "./checkout-form-page.styles.css";

const CheckoutPageForm = ({
  email,
  userName,
  country,
  street,
  zipcode,
  countryErrors,
  streetErrors,
  zipcodeErrors,
  onSubmitHandler,
  onChangeHandler,
  totalPrice,
  loading,
  error,
  purchased,
}) => {
  const getContent = () => {
    if (purchased) return <Redirect to="/myorders" />;
    else if (loading) return <Spinner />;
    else if (error) {
      return (
        <ErrorPage
          text={"An error has occurred during the purchase process. Try again"}
        />
      );
    } else {
      return (
        <Fragment>
          <BreadCrumbContainer />
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
    }
  };

  return getContent();
};

export default CheckoutPageForm;
