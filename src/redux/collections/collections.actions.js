import collectionsActionTypes from "./collections.types";
import { urlDatabase } from "../constants/constans";

export const fetchCollectionAsyn = (collectionName) => (dispatch) => {
  dispatch(fetchCollectionStart());
  fetch(urlDatabase + `collections/${collectionName}.json`)
    .then((res) => res.json())
    .then((data) => dispatch(fetchCollectionSuccess(data, collectionName)))
    .catch((err) => dispatch(fetchCollectionFailure(err.message)));
};

const fetchCollectionStart = () => {
  return {
    type: collectionsActionTypes.FETCH_COLLECTIONS_START,
    payload: {
      loading: true,
      error: null,
    },
  };
};

const fetchCollectionSuccess = (data, collectionName) => {
  return {
    type: collectionsActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: {
      collection: data,
      loading: false,
      collectionName: collectionName,
    },
  };
};

export const fetchCollectionFailure = (error) => {
  return {
    type: collectionsActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: {
      loading: false,
      error: error,
    },
  };
};
