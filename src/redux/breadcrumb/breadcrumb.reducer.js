import breadcrumbActionTypes from "./breadcrumb.types";

const initialState = {
  text: "",
};

const breadcrumbReducer = (state = initialState, action) => {
  switch (action.type) {
    case breadcrumbActionTypes.SET_BREADCRUMB:
      return { ...state, text: action.payload.text };
    default:
      return state;
  }
};

export default breadcrumbReducer;
