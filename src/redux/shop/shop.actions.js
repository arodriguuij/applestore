import shopActionTypes from "./shop.types";

export const fetchCollectionAsyn = collectionName => dispatch => {
  dispatch(fetchCollectionStart());
  fetch(`https://applestore-db.firebaseio.com/${collectionName}.json`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      dispatch(fetchCollectionStartSuccess(data, collectionName));
    })
    .catch(err => {
      console.log(err);
      dispatch(fetchCollectionStartFailure(err.message));
    });
};

const fetchCollectionStart = () => {
  return {
    type: shopActionTypes.FETCH_COLLECTION_START,
    payload: {
      loading: true,
      error: ""
    }
  };
};

const fetchCollectionStartSuccess = (collection, collectionName) => {
  return {
    type: shopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: {
      collection: collection,
      loading: false,
      collectionName: collectionName
    }
  };
};

const fetchCollectionStartFailure = error => {
  return {
    type: shopActionTypes.FETCH_COLLECTION_FAILURE,
    payload: {
      loading: false,
      error: error
    }
  };
};
