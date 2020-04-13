import React, { lazy, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { selectCollectionNamesX } from "../../redux/collectionNames/collection.names.selectors";
import "./container-page.styles.css";

const ErrorPage = lazy(() => import("../../components/error-page/error-page"));
const HomePage = lazy(() => import("../homePage/home-page.container"));
const CheckoutPage = lazy(() => import("../checkoutPage/checkout.container"));
const ItemPage = lazy(() => import("../reviewPage/review-page.container"));
const CollectionPage = lazy(() =>
  import("../collectionsPage/collectionsPage.container")
);

const ContainerPage = ({ collectionNames }) => {
  return (
    <div className="main-page">
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/checkout" render={() => <CheckoutPage />} />
        {collectionNames.map(({ link }) => (
          <Route
            key={link}
            exact
            path={`/${link}`}
            render={(match) => <CollectionPage path={match.match.path} />}
          />
        ))}
        {collectionNames.map(({ link }, i, collection) =>
          collection.length === i + 1 ? (
            <Fragment key={link}>
              <Switch>
                <Route
                  exact
                  path={`/${link}/:id`}
                  render={(match) => (
                    <ItemPage
                      path={match.match.path}
                      params={match.match.params}
                    />
                  )}
                />
                <Route
                  path="/"
                  render={() => <ErrorPage text="Collection not found" />}
                />
              </Switch>
            </Fragment>
          ) : (
            <Route
              key={link}
              exact
              path={`/${link}/:id`}
              render={(match) => (
                <ItemPage path={match.match.path} params={match.match.params} />
              )}
            />
          )
        )}
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({
  collectionNames: selectCollectionNamesX("collectionNames")(state),
});

export default connect(mapStateToProps)(ContainerPage);
