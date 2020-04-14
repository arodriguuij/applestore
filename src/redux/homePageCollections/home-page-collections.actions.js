import homePageCollectionsActionTypes from "./home-page-collections.types";
import { urlDababaseCollectionMainPage } from "../constants/constans";

export const fetchHomePageCollectionsAsyn = () => (dispatch) => {
  dispatch(fetchHomePageCollectionsStart());
  fetch(urlDababaseCollectionMainPage)
    .then((res) => res.json())
    .then((data) => dispatch(fetchHomePageCollectionsSuccess(data)))
    .catch((err) => dispatch(fetchHomePageCollectionsFailure(err.message)));
};

export const fetchHomePageCollectionsStart = () => {
  return {
    type: homePageCollectionsActionTypes.FETCH_HOME_PAGE_COLLECTIONS_START,
    payload: {
      loading: true,
      error: null,
    },
  };
};

export const fetchHomePageCollectionsSuccess = (data) => {
  return {
    type: homePageCollectionsActionTypes.FETCH_HOME_PAGE_COLLECTIONS_SUCCESS,
    payload: {
      data: data,
      loading: false,
    },
  };
};

export const fetchHomePageCollectionsFailure = (error) => {
  return {
    type: homePageCollectionsActionTypes.FETCH_HOME_PAGE_COLLECTIONS_FAILURE,
    payload: {
      loading: false,
      error: error,
    },
  };
};
