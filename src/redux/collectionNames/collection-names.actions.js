import collectionNamesActionTypes from "./collection-names.types";
import { urlDatabaseCollectionName } from "../constants/constans";

export const fetchCollectionNamesAsync = () => (dispatch) => {
  dispatch(fetchCollectionNamesStart());
  fetch(urlDatabaseCollectionName)
    .then((res) => res.json())
    .then((data) => dispatch(fetchCollectionNamesSuccess(data)))
    .catch((err) => dispatch(fetchCollectionNamesFailure(err)));
};

export const fetchCollectionNamesStart = () => {
  return {
    type: collectionNamesActionTypes.FETCH_COLLECTION_NAMES_START,
    payload: {
      loading: true,
      error: null,
    },
  };
};

export const fetchCollectionNamesSuccess = (data) => {
  return {
    type: collectionNamesActionTypes.FETCH_COLLECTION_NAMES_SUCCESS,
    payload: {
      collection: data,
      loading: false,
    },
  };
};

export const fetchCollectionNamesFailure = (err) => {
  return {
    type: collectionNamesActionTypes.FETCH_COLLECTION_NAMES_FAILURE,
    payload: {
      loading: false,
      error: err,
    },
  };
};
