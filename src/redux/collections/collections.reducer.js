import shopActionTypes from "./collections.types";

const initialState = {
  collection_mac: {
    itemsAndSubtypes: {
      items: {},
      subtypes: [],
    },
    types: [],
  },
  collection_iphone: {
    itemsAndSubtypes: {
      items: {},
      subtypes: [],
    },
    types: [],
  },
  collection_ipad: {
    itemsAndSubtypes: {
      items: {},
      subtypes: [],
    },
    types: [],
  },
  collection_watch: {
    itemsAndSubtypes: {
      items: {},
      subtypes: [],
    },
    types: [],
  },
  collection_accessories: {
    itemsAndSubtypes: {
      items: {},
      subtypes: [],
    },
    types: [],
  },
  loading: false,
  error: null,
};

const collectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case shopActionTypes.FETCH_COLLECTION_START:
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error,
      };
    case shopActionTypes.FETCH_COLLECTION_SUCCESS:
      let collectionToSaveData = `collection_${action.payload.collectionName}`;
      return {
        ...state,
        loading: action.payload.loading,
        [collectionToSaveData]: action.payload.collection,
      };
    case shopActionTypes.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default collectionsReducer;
