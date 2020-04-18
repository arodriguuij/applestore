import actualDeviceActionTypes from "./actual-device.types";

const initialState = {
  collection_actualDevice: null,
  loading: false,
  error: null,
};

const fetchActualDeviceStart = (state, payload) => ({
  ...state,
  loading: payload.loading,
  error: payload.error,
});
const fetchActualDeviceSuccess = (state, payload) => ({
  ...state,
  loading: payload.loading,
  collection_actualDevice: payload.collection,
});
const fetchActualDeviceFailure = (state, payload) => ({
  ...state,
  loading: payload.loading,
  error: payload.error,
});
const removeActualDevice = (state, payload) => ({
  ...state,
  collection_actualDevice: payload.collection,
  loading: payload.loading,
  error: payload.error,
});

const actualDeviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case actualDeviceActionTypes.FETCH_ACTUAL_DEVICE_START:
      return fetchActualDeviceStart(state, action.payload);
    case actualDeviceActionTypes.FETCH_ACTUAL_DEVICE_SUCCESS:
      return fetchActualDeviceSuccess(state, action.payload);
    case actualDeviceActionTypes.FETCH_ACTUAL_DEVICE_FAILURE:
      return fetchActualDeviceFailure(state, action.payload);
    case actualDeviceActionTypes.REMOVE_ACTUAL_DEVICE:
      return removeActualDevice(state, action.payload);
    default:
      return state;
  }
};

export default actualDeviceReducer;
