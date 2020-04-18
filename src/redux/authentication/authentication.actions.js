import authenticationActionTypes from "./authentication.types";

export const signIn = (userBasicProfile) => {
  return {
    type: authenticationActionTypes.SIGN_IN,
    payload: {
      isSignedIn: true,
      userBasicProfile: {
        email: userBasicProfile.email,
        name: userBasicProfile.name,
        id: userBasicProfile.id,
      },
    },
  };
};

export const signOut = () => {
  return {
    type: authenticationActionTypes.SIGN_OUT,
    payload: {
      isSignedIn: false,
      userBasicProfile: {
        email: null,
        name: null,
        id: null,
      },
    },
  };
};

export const googleAuthenticationStart = () => {
  return {
    type: authenticationActionTypes.GOOGLE_AUTHENTICATION_START,
    payload: {
      loading: true,
      error: null,
    },
  };
};

export const googleAuthenticationSuccess = (auth) => {
  return {
    type: authenticationActionTypes.GOOGLE_AUTHENTICATION_SUCCESS,
    payload: {
      loading: false,
      auth: auth,
    },
  };
};

export const googleAuthenticationFailure = (error) => {
  return {
    type: authenticationActionTypes.GOOGLE_AUTHENTICATION_FAILURE,
    payload: {
      loading: false,
      error: error,
    },
  };
};
