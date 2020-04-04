import React, { useEffect } from "react";
import "./App.css";
import HomePage from "./containers/homePage/home-page.container";
import Header from "./components/header/header.component";
/* import Footer from "./components/footer/footer.component"; */
import { Route, Switch } from "react-router-dom";
import ErrorBoundary from "./components/error-boundary/error.boundary.component";
import CollectionPage from "./containers/collectionPage/collection-page.container";
import DetailsPage from "./containers/detailsPage/details-page.container";
import ErrorPage from "./components/error-page/error-page";
import { fetchCollectionNamesAsync } from "./redux/collectionNames/collection-names.actions";
import { connect } from "react-redux";
import Spinner from "./components/spinner/spinner.component";

const App = (props) => {
  const { onFetchCollectionNamesAsync } = props;
  useEffect(() => {
    onFetchCollectionNamesAsync();
  }, [onFetchCollectionNamesAsync]);

  let content = <Spinner />;
  if (!props.loading)
    content = (
      <div className="App">
        <Header />
        <ErrorBoundary>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            {props.collectionNames.map((collectionName) => (
              <Route
                key={collectionName.link}
                exact
                path={`/${collectionName.link}`}
                component={CollectionPage}
              ></Route>
            ))}
            {props.collectionNames.map((collectionName) => (
              <Route
                key={collectionName.link}
                exact
                path={`/${collectionName.link}/:id`}
                component={DetailsPage}
              ></Route>
            ))}
            <Route path="/" component={ErrorPage}></Route>
          </Switch>
        </ErrorBoundary>
{/*         <Footer /> */}
      </div>
    );

  return content;
};

const mapStateToProps = (state) => ({
  collectionNames: state.collectionNames.collectionNames,
  loading: state.collectionNames.loading,
  error: state.collectionNames.error,
});

const mapDispatchtoProps = (dispatch) => ({
  onFetchCollectionNamesAsync: () => dispatch(fetchCollectionNamesAsync()),
});

export default connect(mapStateToProps, mapDispatchtoProps)(App);
