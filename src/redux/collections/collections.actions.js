import shopActionTypes from "./collections.types";

export const fetchCollectionAsyn = (collectionName) => (dispatch) => {
  dispatch(fetchCollectionStart());
  fetch(
    `https://applestore-db.firebaseio.com/collections/${collectionName}.json`
  )
    .then((res) => res.json())
    .then((data) => dispatch(fetchCollectionSuccess(data, collectionName)))
    .catch((err) => dispatch(fetchCollectionFailure(err.message)));
};

const fetchCollectionStart = () => {
  return {
    type: shopActionTypes.FETCH_COLLECTION_START,
    payload: {
      loading: true,
      error: null,
    },
  };
};

const fetchCollectionSuccess = (data, collectionName) => {
  return {
    type: shopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: {
      collection: data,
      loading: false,
      collectionName: collectionName,
    },
  };
};

export const fetchCollectionFailure = (error) => {
  return {
    type: shopActionTypes.FETCH_COLLECTION_FAILURE,
    payload: {
      loading: false,
      error: error,
    },
  };
};
