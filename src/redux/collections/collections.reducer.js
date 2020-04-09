import shopActionTypes from "./collections.types";

const initialState = {
  collection_Mac: {
    itemsAndSubtypes: {
      items: {},
      subtypes: [],
    },
    types: [],
  },
  collection_iPhone: {
    itemsAndSubtypes: {
      items: {},
      subtypes: [],
    },
    types: [],
  },
  collection_iPad: {
    itemsAndSubtypes: {
      items: {},
      subtypes: [],
    },
    types: [],
  },
  collection_iWatch: {
    itemsAndSubtypes: {
      items: {},
      subtypes: [],
    },
    types: [],
  },
  collection_Accessories: {
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
