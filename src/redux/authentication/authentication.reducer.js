import authenticationActionTypes from "./authentication.types";

const initialState = {
  isSignedIn: null,
  userBasicProfile: {
    email: null,
    name: null,
    id: null
  },
  auth: null
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case authenticationActionTypes.SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        userBasicProfile: {...state.userBasicProfile, ...action.payload.userBasicProfile},
      };
    case authenticationActionTypes.SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        userBasicProfile: {...state.userBasicProfile, ...action.payload.userBasicProfile},
      };
    case authenticationActionTypes.GOOGLE_AUTHENTICATION_INITIALIZE_START:
      return {
        ...state,
        auth: action.payload.auth,
      };
    default:
      return state;
  }
};

export default authenticationReducer;
