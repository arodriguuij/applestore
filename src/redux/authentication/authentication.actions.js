import authenticationActionTypes from "./authentication.types";

export const signIn = (id) => {
  return {
    type: authenticationActionTypes.SIGN_IN,
    payload: {
      id,
    },
  };
};

export const signOut = () => {
  return {
    type: authenticationActionTypes.SIGN_OUT,
    payload: {
      id: null,
    },
  };
};

export const googleAuthenticationInitializeStart = (auth) => {
  debugger;
  return {
    type: authenticationActionTypes.GOOGLE_AUTHENTICATION_INITIALIZE_START,
    payload: {
      auth: auth
    },
  };
};
