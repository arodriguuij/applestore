import collectionNamesActionTypes from "./collection-names.types";

const initialState = {
  collectionNames: [],
  loading: true,
  error: "",
};

const collectionNamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case collectionNamesActionTypes.FETCH_COLLECTION_NAMES_START:
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error,
      };
    case collectionNamesActionTypes.FETCH_COLLECTION_NAMES_SUCCESS:
      return {
        ...state,
        loading: action.payload.loading,
        collectionNames: action.payload.collection,
      };
    case collectionNamesActionTypes.FETCH_COLLECTION_NAMES_FAILURE:
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default collectionNamesReducer;
