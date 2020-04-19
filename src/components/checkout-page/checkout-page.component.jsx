import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import BreadcrumbContainer from "../../containers/breadcrumb/breadcrumb.container";
import CheckoutTable from "../../components/checkout-table/checkout-table.component";
import CustomButton from "../../components/custom-button/custom-button.component";

const CheckoutPage = ({ isSignedIn, onPurchaseInit, numItems }) => {
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
      <BreadcrumbContainer />
      <CheckoutTable />
      <Link to="/checkoutForm">{button}</Link>
    </Fragment>
  );
};

export default CheckoutPage;
