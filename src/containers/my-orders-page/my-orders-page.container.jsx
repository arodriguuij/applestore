import React, { useEffect } from "react";
import { setBreadcrumb } from "../../redux/breadcrumb/breadcrumb.actions";
import { fetchMyOrdersStart } from "../../redux/myOrders/my-orders.action";
import { selectorAuthenticationByKeyAndNestedKey } from "../../redux/authentication/authentication.selector";
import { myOrdersSelectorByKey } from "../../redux/myOrders/my-order.selectors";
import { connect } from "react-redux";
import MyOrdersPage from "../../components/my-orders-page/my-orders-page.component";

const MyOrdersPageContainer = ({
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

  return (
    <MyOrdersPage
      myOrdersCollection={myOrdersCollection}
      loading={loading}
      error={error}
    />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyOrdersPageContainer);
