import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import "./content-pages.styles.css";
import { selectCollection } from "../../redux/collectionNames/collection.names.selectors";
const ErrorPage = lazy(() => import("../../components/error-page/error-page"));
const HomePage = lazy(() => import("../homePage/home-page.container"));
const CheckoutPage = lazy(() => import("../checkoutPage/checkout.container"));
const ItemPage = lazy(() => import("../itemPage/itemPage.container"));
const ItemCollectionsPage = lazy(() => import('../itemCollectionsPage/itemCollectionsPage.container'));

const ContentPage = ({collectionNames}) => {
  return (
    <div className="main-page">
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          {collectionNames.map(({ link }) => (
            <Route
              key={link}
              exact
              path={`/${link}`}
              render={(match) => <ItemCollectionsPage path={match.match.path}/>}
            />
          ))}
          {collectionNames.map(({ link }) => (
            <Route
              key={link}
              exact
              path={`/${link}/:id`}
              render={(props) => <ItemPage {...props}/>}
            />
          ))}
          }
          <Route exact path="/bag" render={() => <CheckoutPage/>} />
          <Route path="/" render={() => <ErrorPage text="Page not found" />} />
        </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({
  collectionNames: selectCollection(state),
});

export default connect(mapStateToProps)(ContentPage);
