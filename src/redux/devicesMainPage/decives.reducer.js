import devicesActionTypes from "./devices.types";

const initialState = {
  topDevices: [],
  banner: {
    title: "",
    body: []
  },
  loading: false,
  error: null
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
        topDevices: action.payload.data['topDevices'],
        banner: action.payload.data['banner']
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
