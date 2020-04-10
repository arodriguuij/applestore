import devicesActionTypes from "./devices.types";

const initialState = {
  mainImage: "",
  itemsRow: {
    title: "",
    body: []
  },
  banner: {
    title: "",
    body: [],
    imgMobile: ""
  },
  bannerGrid:{
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
        itemsRow: action.payload.data['itemsRow'],
        banner: action.payload.data['banner'],
        bannerGrid: action.payload.data['bannerGrid'],
        mainImage: action.payload.data['mainImage']
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
