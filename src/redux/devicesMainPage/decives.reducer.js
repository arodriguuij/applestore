import devicesActionTypes from "./devices.types";

const initialState = {
  collection_mainPage: [],
  loading: false,
  error: ""
};

const devicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case devicesActionTypes.FETCH_DEVICES_START:
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error
      };
    case devicesActionTypes.FETCH_DEVICES_SUCCESS:
      return {
        ...state,
        loading: action.payload.loading,
        collection_mainPage: action.payload.collection
      };
    case devicesActionTypes.FETCH_DEVICES_FAILURE:
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default devicesReducer;
