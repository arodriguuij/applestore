import authenticationActionTypes from "./authentication.types";

const initialState = {
  isSignedIn: null,
  id: null,
  auth: null
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case authenticationActionTypes.SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        id: action.payload.id,
      };
    case authenticationActionTypes.SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        id: action.payload.id,
      };
    case authenticationActionTypes.GOOGLE_AUTHENTICATION_INITIALIZE_START:
      debugger;
      return {
        ...state,
        auth: action.payload.auth,
      };
    default:
      return state;
  }
};

export default authenticationReducer;
