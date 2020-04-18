import React, { lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { selectorAuthenticationByKey } from "../../redux/authentication/authentication.selector";
import CheckoutPageFormContainer from "../checkoutPageFormContainer/checkout-page-form-container.container";
import MyOrdersPageContainer from "../myOrdersPageContainer/my-orders-page-container.container";
import "./routes-container.styles.css";

const HomePageContainer = lazy(() => import("../homePageContainer/home-page-container.container"));
const CheckoutPageContainer = lazy(() => import("../checkoutPageContainer/checkout-page-container.container"));
const ItemPageContainer = lazy(() => import("../reviewPageContainer/review-page-container.container"));
const CollectionPageContainer = lazy(() =>
  import("../collectionPageContainer/collection-page-container.container")
);

const ContainerPage = ({isSignedIn }) => {
  return (
    <div className="main-page">
      <Switch>
        <Route exact path="/" render={() => <HomePageContainer />} />
        <Route exact path="/checkout" render={() => <CheckoutPageContainer />} />
        <Route
          exact
          path="/checkoutForm"
          render={() =>
            isSignedIn ? <CheckoutPageFormContainer /> : <Redirect to="/" />
          }
        />
        <Route
          exact
          path={`/myorders`}
          render={() => (isSignedIn ? <MyOrdersPageContainer /> : <Redirect to="/" />)}
        />
        <Route
          exact
          path={`/Mac`}
          render={() => <CollectionPageContainer collection={"Mac"} />}
        />
        <Route
          exact
          path={`/iPad`}
          render={() => <CollectionPageContainer collection={"iPad"} />}
        />
        <Route
          exact
          path={`/iPhone`}
          render={() => <CollectionPageContainer collection={"iPhone"} />}
        />
        <Route
          exact
          path={`/iWatch`}
          render={() => <CollectionPageContainer collection={"iWatch"} />}
        />
        <Route
          exact
          path={`/Accessories`}
          render={() => <CollectionPageContainer collection={"Accessories"} />}
        />
        <Route
          exact
          path={`/Mac/:id`}
          render={(match) => (
            <ItemPageContainer collection={"Mac"} id={match.match.params.id} />
          )}
        />
        <Route
          exact
          path={`/iPad/:id`}
          render={(match) => (
            <ItemPageContainer collection={"iPad"} id={match.match.params.id} />
          )}
        />
        <Route
          exact
          path={`/iPhone/:id`}
          render={(match) => (
            <ItemPageContainer collection={"iPhone"} id={match.match.params.id} />
          )}
        />
        <Route
          exact
          path={`/iWatch/:id`}
          render={(match) => (
            <ItemPageContainer collection={"iWatch"} id={match.match.params.id} />
          )}
        />
        <Route
          exact
          path={`/Accessories/:id`}
          render={(match) => (
            <ItemPageContainer collection={"Accessories"} id={match.match.params.id} />
          )}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isSignedIn: selectorAuthenticationByKey("isSignedIn")(state),
});

export default connect(mapStateToProps)(ContainerPage);