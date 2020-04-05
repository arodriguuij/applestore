import React, { useEffect, Suspense, lazy } from "react";
import { connect } from "react-redux";
import { fetchCollectionNamesAsync } from "./redux/collectionNames/collection-names.actions";
import Header from "./containers/header/header.component";
import ContentPage from "./containers/contentPages/content-pages.container";
/* import Footer from "./components/footer/footer.component"; */
import ErrorBoundary from "./components/error-boundary/error.boundary.component";
import Spinner from "./components/spinner/spinner.component";
import "./App.css";
const ErrorPage = lazy(() => import("./components/error-page/error-page"));


const App = (props) => {
  const { onFetchCollectionNamesAsync } = props;
  useEffect(() => {
    onFetchCollectionNamesAsync();
  }, [onFetchCollectionNamesAsync]);

  let content = <Spinner />;
  if (!props.loading)
    content = (
      <div className="App">
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Header />
            <ContentPage />
            {/*         <Footer /> */}
          </Suspense>
        </ErrorBoundary>
      </div>
    );
    if(props.error) content = <ErrorPage/>

  return content;
};

const mapStateToProps = (state) => ({
  loading: state.collectionNames.loading,
  error: state.collectionNames.error
});

const mapDispatchtoProps = (dispatch) => ({
  onFetchCollectionNamesAsync: () => dispatch(fetchCollectionNamesAsync()),
});

export default connect(mapStateToProps, mapDispatchtoProps)(App);
