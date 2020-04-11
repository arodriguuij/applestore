import collectionNamesActionTypes from "./collection-names.types";

const initialState = {
  collectionNames: [],
  loading: true,
  error: null,
};
const fetchCollectionNamesStart = (state, payload) => {
  return {
    ...state,
    loading: payload.loading,
    error: payload.error,
  };
};
const fetchCollectionNamesSuccess = (state, payload) => {
  return {
    ...state,
    loading: payload.loading,
    collectionNames: payload.collection,
  };
};
const fetchCollectionNamesFailure = (state, payload) => {
  return {
    ...state,
    loading: payload.loading,
    error: payload.error,
  };
};
const collectionNamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case collectionNamesActionTypes.FETCH_COLLECTION_NAMES_START:
      return fetchCollectionNamesStart(state, action.payload);
    case collectionNamesActionTypes.FETCH_COLLECTION_NAMES_SUCCESS:
      return fetchCollectionNamesSuccess(state, action.payload);
    case collectionNamesActionTypes.FETCH_COLLECTION_NAMES_FAILURE:
      return fetchCollectionNamesFailure(state, action.payload);
    default:
      return state;
  }
};

export default collectionNamesReducer;
