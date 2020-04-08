import devicesActionTypes from "./devices.types";

const initialState = {
  topItems: [],
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
        topItems: action.payload.data['topItems'],
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
