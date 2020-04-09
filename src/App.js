import React, { useEffect, Suspense, lazy } from "react";
import { connect } from "react-redux";
import { fetchCollectionNamesAsync } from "./redux/collectionNames/collection-names.actions";
import { selectCollection } from "./redux/collectionNames/collection.names.selectors";
import { selectorNumberItems } from "./redux/checkout/checkout.selectors";
import Header from "./components/header/header.component";
import ContentPage from "./containers/contentPages/content-pages.container";
import Footer from "./components/footer/footer.component";
import ErrorBoundary from "./components/error-boundary/error.boundary.component";
import Spinner from "./components/spinner/spinner.component";
import {
  selectLoading,
  selectError,
} from "./redux/collectionNames/collection.names.selectors";
import "./App.css";

const ErrorPage = lazy(() => import("./components/error-page/error-page"));

const App = ({
  onFetchCollectionNamesAsync,
  loading,
  error,
  collectionNames,
  numItems,
}) => {
  useEffect(() => {
    onFetchCollectionNamesAsync();
  }, [onFetchCollectionNamesAsync]);

  let content = <Spinner />;
  if (!loading)
    content = (
      <div className="App">
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Header
              collectionNames={collectionNames}
              numItems={numItems}
            />
            <ContentPage />
            <Footer />
          </Suspense>
        </ErrorBoundary>
      </div>
    );
  if (error) content = <ErrorPage text="Something was wrong... Try again :|" />;

  return content;
};

const mapStateToProps = (state) => ({
  loading: selectLoading(state),
  error: selectError(state),
  collectionNames: selectCollection(state),
  numItems: selectorNumberItems(state),
});

const mapDispatchtoProps = (dispatch) => ({
  onFetchCollectionNamesAsync: () => dispatch(fetchCollectionNamesAsync()),
});

export default connect(mapStateToProps, mapDispatchtoProps)(App);
