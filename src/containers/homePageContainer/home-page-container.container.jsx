import React, { useEffect, lazy } from "react";
import { connect } from "react-redux";
import { fetchHomePageCollectionsStart } from "../../redux/homePageCollections/home-page-collections.actions";
import HomePage from "../../components/home-page/home-page.component";
import {
  selectorHomePageCollectionByKey,
  selectorIsDataEmpty,
} from "../../redux/homePageCollections/home-page-collections.selectors";
import Spinner from "../../components/spinner/spinner.component";

const ErrorPage = lazy(() =>
  import("../../components/error-page/error-page.component")
);

const HomePageContainer = ({
  error,
  onFetchHomePageCollectionsStart,
  isDataEmpty,
  loading,
}) => {
  useEffect(() => {
    if (isDataEmpty) onFetchHomePageCollectionsStart();
  }, [onFetchHomePageCollectionsStart, isDataEmpty]);

  const getContent = () => {
    if (loading) return <Spinner />;
    else if (error)
      return <ErrorPage text="Houston, the main page is lost... " />;
    else return <HomePage />;
  };

  return getContent();
};

const mapStateToProps = (state) => ({
  isDataEmpty: selectorIsDataEmpty(state),
  error: selectorHomePageCollectionByKey("error")(state),
  loading: selectorHomePageCollectionByKey("loading")(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFetchHomePageCollectionsStart: () =>
    dispatch(fetchHomePageCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
