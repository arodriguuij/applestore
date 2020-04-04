import actualDeviceActionTypes from "./actual-device.types";

const initialState = {
  collection_actualDevice: null,
  loading: false,
  error: ""
};

const actualDeviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case actualDeviceActionTypes.FETCH_ACTUAL_DEVICE_START:
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error
      };
    case actualDeviceActionTypes.FETCH_ACTUAL_DEVICE_SUCCESS:
      return {
        ...state,
        loading: action.payload.loading,
        collection_actualDevice: action.payload.collection
      };
    case actualDeviceActionTypes.FETCH_ACTUAL_DEVICE_FAILURE:
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default actualDeviceReducer;
