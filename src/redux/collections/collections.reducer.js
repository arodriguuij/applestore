import collectionsActionTypes from "./collections.types";

const initialState = {
  collection_Mac: {
    items: {},
    subtypes: [],
    types: [],
  },
  collection_iPhone: {
    items: {},
    subtypes: [],
    types: [],
  },
  collection_iPad: {
    items: {},
    subtypes: [],
    types: [],
  },
  collection_iWatch: {
    items: {},
    subtypes: [],
    types: [],
  },
  collection_Accessories: {
    items: {},
    subtypes: [],
    types: [],
  },
  loading: false,
  error: null,
};

const fetchCollectionsStart = (state, payload) => ({
  ...state,
  loading: payload.loading,
  error: payload.error,
});
const fetchCollectionsSuccess = (state, payload) => {
  let collectionToSaveData = `collection_${payload.collectionName}`;
  return {
    ...state,
    loading: payload.loading,
    [collectionToSaveData]: payload.collection,
  };
};
const fetchCollectionsFailure = (state, payload) => ({
  ...state,
  loading: payload.loading,
  error: payload.error,
});

const collectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case collectionsActionTypes.FETCH_COLLECTIONS_START:
      return fetchCollectionsStart(state, action.payload);
    case collectionsActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return fetchCollectionsSuccess(state, action.payload);
    case collectionsActionTypes.FETCH_COLLECTIONS_FAILURE:
      return fetchCollectionsFailure(state, action.payload);
    default:
      return state;
  }
};

export default collectionsReducer;
