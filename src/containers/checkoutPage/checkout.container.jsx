import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { setBreadcrumb } from "../../redux/breadcrumb/breadcrumb.actions";
import Breadcrumb from "../../components/breadcrumb/breadcrumb.component";
import CheckoutTable from "../../components/checkout-table/checkout-table.component";
import "./checkout.styles.css";

const CheckoutPage = ({ onSetBreadcrumb }) => {
  useEffect(() => {
    onSetBreadcrumb("Checkout");
  }, [onSetBreadcrumb]);

  return (
    <Fragment>
      <Breadcrumb />
      <CheckoutTable />
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSetBreadcrumb: (text) => dispatch(setBreadcrumb(text)),
});
export default connect(null, mapDispatchToProps)(CheckoutPage);
