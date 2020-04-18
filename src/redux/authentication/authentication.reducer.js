import authenticationActionTypes from "./authentication.types";

const initialState = {
  isSignedIn: null,
  userBasicProfile: {
    email: null,
    name: null,
    id: null,
  },
  auth: null,
  loading: null,
  error: null,
};

const signIn = (state, payload) => ({
  ...state,
  isSignedIn: payload.isSignedIn,
  userBasicProfile: {
    ...state.userBasicProfile,
    ...payload.userBasicProfile,
  },
});
const signOut = (state, payload) => ({
  ...state,
  isSignedIn: payload.isSignedIn,
  userBasicProfile: {
    ...state.userBasicProfile,
    ...payload.userBasicProfile,
  },
});
const googleAuthenticationStart = (state, payload) => ({
  ...state,
  loading: payload.loading,
  error: payload.error,
});
const googleAuthenticationSuccess = (state, payload) => ({
  ...state,
  loading: payload.loading,
  auth: payload.auth,
});
const googleAuthenticationFailure = (state, payload) => ({
  ...state,
  loading: payload.loading,
  error: payload.error,
});

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case authenticationActionTypes.SIGN_IN:
      return signIn(state, action.payload);
    case authenticationActionTypes.SIGN_OUT:
      return signOut(state, action.payload);
    case authenticationActionTypes.GOOGLE_AUTHENTICATION_START:
      return googleAuthenticationStart(state, action.payload);
    case authenticationActionTypes.GOOGLE_AUTHENTICATION_SUCCESS:
      return googleAuthenticationSuccess(state, action.payload);
    case authenticationActionTypes.GOOGLE_AUTHENTICATION_FAILURE:
      return googleAuthenticationFailure(state, action.payload);
    default:
      return state;
  }
};

export default authenticationReducer;
