import React, { useEffect, Fragment } from "react";
import BreadCrumb from "../../components/breadcrumb/breadcrumb.component";
import { setBreadcrumb } from "../../redux/breadcrumb/breadcrumb.actions";
import MyOrdersTable from "../../components/my-orders-table/my-orders-table.components";
import { fetchMyOrdersStart } from "../../redux/myOrders/my-orders.action";
import { selectorAuthenticationByKeyAndNestedKey } from "../../redux/authentication/authentication.selector";
import { myOrdersSelectorByKey } from "../../redux/myOrders/my-order.selectors";
import { connect } from "react-redux";
import ErrorPage from "../../components/error-page/error-page.component";
import Spinner from "../../components/spinner/spinner.component";
import "./my-orders-page.styles.css";

const MyOrdersPage = ({
  onSetBreadcrum,
  onFetchMyOrdersStart,
  userId,
  myOrdersCollection,
  error,
  loading,
}) => {
  useEffect(() => {
    onSetBreadcrum("My orders");
    onFetchMyOrdersStart(userId);
  }, [onSetBreadcrum, onFetchMyOrdersStart, userId]);

  let content = (
    <div className="my-orders-container">
      {Object.entries(myOrdersCollection).map(([id, order]) => (
        <MyOrdersTable key={id} order={order} />
      ))}
    </div>
  );
  if (error)
    content = (
      <ErrorPage
        text={"An error has occurred during the order fetch process. Try again"}
      />
    );
  if (loading) content = <Spinner />;

  return (
    <Fragment>
      <BreadCrumb />
      {content}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  userId: selectorAuthenticationByKeyAndNestedKey(
    "userBasicProfile",
    "id"
  )(state),
  error: myOrdersSelectorByKey("error")(state),
  loading: myOrdersSelectorByKey("loading")(state),
  myOrdersCollection: myOrdersSelectorByKey("myOrdersCollection")(state),
});
const mapDispatchToProps = (dispatch) => ({
  onSetBreadcrum: (text) => dispatch(setBreadcrumb(text)),
  onFetchMyOrdersStart: (userId) => dispatch(fetchMyOrdersStart(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyOrdersPage);
