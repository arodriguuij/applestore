import authenticationActionTypes from "./authentication.types";

export const signIn = (userBasicProfile) => {
  return {
    type: authenticationActionTypes.SIGN_IN,
    payload: {
      userBasicProfile:{
        email: userBasicProfile.email,
        name: userBasicProfile.name,
        id: userBasicProfile.id
      },
    },
  };
};

export const signOut = () => {
  return {
    type: authenticationActionTypes.SIGN_OUT,
    payload: {
      userBasicProfile: {
        email: null,
        name: null,
        id: null
      },
    },
  };
};

export const googleAuthenticationInitializeStart = (auth) => {
  return {
    type: authenticationActionTypes.GOOGLE_AUTHENTICATION_INITIALIZE_START,
    payload: {
      auth: auth
    },
  };
};
