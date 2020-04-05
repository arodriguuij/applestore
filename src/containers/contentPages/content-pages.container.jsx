import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import "./content-pages.styles.css";
import { selectCollection } from "../../redux/collectionNames/collection.names.selectors";
const HomePage = lazy(() => import("../homePage/home-page.container"));
const CollectionPage = lazy(() =>
  import("../collectionPage/collection-page.container")
);
const DetailsPage = lazy(() => import("../detailsPage/details-page.container"));

const ContentPage = (props) => {
  return (
    <div className="main-page">
      <Switch>
        <Route exact path="/" component={HomePage} />
        {props.collectionNames.map((collectionName) => (
          <Route
            key={collectionName.link}
            exact
            path={`/${collectionName.link}`}
            component={CollectionPage}
          />
        ))}
        {props.collectionNames.map((collectionName) => (
          <Route
            key={collectionName.link}
            exact
            path={`/${collectionName.link}/:id`}
            component={DetailsPage}
          />
        ))}
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({
  collectionNames: selectCollection(state),
});

export default connect(mapStateToProps)(ContentPage);
