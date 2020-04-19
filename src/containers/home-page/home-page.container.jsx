import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchHomePageCollectionsStart } from "../../redux/homePageCollections/home-page-collections.actions";
import HomePage from "../../components/home-page/home-page.component";
import {
  selectorHomePageCollectionByKey,
  selectorIsDataEmpty,
} from "../../redux/homePageCollections/home-page-collections.selectors";

const HomePageContainer = ({
  error,
  onFetchHomePageCollectionsStart,
  isDataEmpty,
  loading,
}) => {
  useEffect(() => {
    if (isDataEmpty) onFetchHomePageCollectionsStart();
  }, [onFetchHomePageCollectionsStart, isDataEmpty]);

  return <HomePage loading={loading} error={error} />;
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
