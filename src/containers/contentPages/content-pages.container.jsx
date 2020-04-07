import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import "./content-pages.styles.css";
import { selectCollection } from "../../redux/collectionNames/collection.names.selectors";
import PageContent from "../../components/page-content/page-content.component";
const ErrorPage = lazy(() => import("../../components/error-page/error-page"));
const HomePage = lazy(() => import("../homePage/home-page.container"));
const CollectionPage = lazy(() =>
  import("../collectionPage/collection-page.container")
);
const BagPage = lazy(() => import("../bagPage/bag-page.container"));
const DetailsPage = lazy(() => import("../detailsPage/details-page.container"));
const AccessoriesPage = lazy(() => import('../accessoriesPage/accessoriesPage.container'));

const ContentPage = ({ collectionNames }) => {
  return (
    <div className="main-page">
      <PageContent>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/accessories" component={AccessoriesPage} />
          {collectionNames.map(({ link }) => (
            <Route
              key={link}
              exact
              path={`/${link}`}
              component={CollectionPage}
            />
          ))}
          {collectionNames.map(({ link }) => (
            <Route
              key={link}
              exact
              path={`/${link}/:id`}
              component={DetailsPage}
            />
          ))}
          }
          <Route exact path="/bag" component={BagPage} />
          <Route path="/" render={() => <ErrorPage text="Page not found" />} />
        </Switch>
      </PageContent>
    </div>
  );
};

const mapStateToProps = (state) => ({
  collectionNames: selectCollection(state),
});

export default connect(mapStateToProps)(ContentPage);
