import storage from "./storage.js";
import shopActionTypes from "./shop.types";

const initialState = {
  collection_mac: [],
  collection_iphone: [],
  collection_ipad: [],
  collection_watch: [],
  loading: false,
  error: ""
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case shopActionTypes.FETCH_COLLECTION_START:
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error
      };
    case shopActionTypes.FETCH_COLLECTION_SUCCESS:
      let collectionToSaveData = `collection_${action.payload.collectionName}`;
      return {
        ...state,
        loading: action.payload.loading,
        [collectionToSaveData]: action.payload.collection
      };
    case shopActionTypes.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default shopReducer;
