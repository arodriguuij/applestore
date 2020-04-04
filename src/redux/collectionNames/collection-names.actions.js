import collectionNamesActionTypes from "./collection-names.types";

export const fetchCollectionNamesAsync = () => (dispatch) => {
  dispatch(fetchCollectionNamesStart());
  fetch("https://applestore-db.firebaseio.com/collectionsName.json")
    .then((res => res.json()))
    .then((data) => dispatch(fetchCollectionNamesSuccess(data)))
    .catch((err) => dispatch(fetchCollectionNamesFailure(err)));
};

const fetchCollectionNamesStart = () => {
  return {
    type: collectionNamesActionTypes.FETCH_COLLECTION_NAMES_START,
    payload: {
      loading: true,
      error: "",
    },
  };
};

const fetchCollectionNamesSuccess = (data) => {
  return {
    type: collectionNamesActionTypes.FETCH_COLLECTION_NAMES_SUCCESS,
    payload: {
      collection: data,
      loading: false,
    },
  };
};

const fetchCollectionNamesFailure = (err) => {
  return {
    type: collectionNamesActionTypes.FETCH_COLLECTION_NAMES_FAILURE,
    payload: {
      loading: false,
      error: err,
    },
  };
};
