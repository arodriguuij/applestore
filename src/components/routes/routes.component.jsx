import React, { lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./routes.styles.css";

const HomePageContainer = lazy(() =>
  import("../../containers/home-page/home-page.container")
);
const CheckoutPageContainer = lazy(() =>
  import(
    "../../containers/checkout-page/checkout-page.container"
  )
);
const ReviewPageContainer = lazy(() =>
  import("../../containers/review-page/review-page.container")
);
const CollectionPageContainer = lazy(() =>
  import(
    "../../containers/collection-page/collection-page.container"
  )
);
const MyOrdersPageContainer = lazy(() =>
  import(
    "../../containers/my-orders-page/my-orders-page.container"
  )
);
const CheckoutPageFormContainer = lazy(() =>
  import(
    "../../containers/checkout-page-form/checkout-page-form.container"
  )
);

const Routes = ({ isSignedIn }) => {
  return (
    <div className="main-page">
      <Switch>
        <Route exact path="/" render={() => <HomePageContainer />} />
        <Route
          exact
          path="/checkout"
          render={() => <CheckoutPageContainer />}
        />
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
          render={() =>
            isSignedIn ? <MyOrdersPageContainer /> : <Redirect to="/" />
          }
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
            <ReviewPageContainer collection={"Mac"} id={match.match.params.id} />
          )}
        />
        <Route
          exact
          path={`/iPad/:id`}
          render={(match) => (
            <ReviewPageContainer collection={"iPad"} id={match.match.params.id} />
          )}
        />
        <Route
          exact
          path={`/iPhone/:id`}
          render={(match) => (
            <ReviewPageContainer
              collection={"iPhone"}
              id={match.match.params.id}
            />
          )}
        />
        <Route
          exact
          path={`/iWatch/:id`}
          render={(match) => (
            <ReviewPageContainer
              collection={"iWatch"}
              id={match.match.params.id}
            />
          )}
        />
        <Route
          exact
          path={`/Accessories/:id`}
          render={(match) => (
            <ReviewPageContainer
              collection={"Accessories"}
              id={match.match.params.id}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default Routes;
