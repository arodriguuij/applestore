import breadcrumbActionTypes from "./breadcrumb.types";

const initialState = {
  text: "",
};

const setBreadcrumb = (state, payload) => {
  return { ...state, text: payload.text };
};
const breadcrumbReducer = (state = initialState, action) => {
  switch (action.type) {
    case breadcrumbActionTypes.SET_BREADCRUMB:
      return setBreadcrumb(state, action.payload);
    default:
      return state;
  }
};

export default breadcrumbReducer;
