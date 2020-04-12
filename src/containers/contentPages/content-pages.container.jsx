import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { selectCollectionNamesX } from "../../redux/collectionNames/collection.names.selectors";
import "./content-pages.styles.css";

const ErrorPage = lazy(() => import("../../components/error-page/error-page"));
const HomePage = lazy(() => import("../homePage/home-page.container"));
const CheckoutPage = lazy(() => import("../checkoutPage/checkout.container"));
const ItemPage = lazy(() => import("../itemPage/itemPage.container"));
const CollectionPage = lazy(() =>
  import("../collectionsPage/collectionsPage.container")
);

const ContentPage = ({ collectionNames }) => {
  return (
    <div className="main-page">
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        {collectionNames.map(({ link }) => (
          <Route
            key={link}
            exact
            path={`/${link}`}
            render={(match) => <CollectionPage path={match.match.path} />}
          />
        ))}
        {collectionNames.map(({ link }) => (
          <Route
            key={link}
            exact
            path={`/${link}/:id`}
            render={(match) => (
              <ItemPage path={match.match.path} params={match.match.params} />
            )}
          />
        ))}
        }
        <Route exact path="/checkout" render={() => <CheckoutPage />} />
        <Route
          path="/"
          render={() => <ErrorPage text="Collection not found" />}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({
  collectionNames: selectCollectionNamesX("collectionNames")(state),
});

export default connect(mapStateToProps)(ContentPage);
