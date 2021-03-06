import React, { useEffect } from "react";
import { connect } from "react-redux";
import { selectorAuthenticationByKey } from "../../redux/authentication/authentication.selector";
import GoogleAuth from "../../components/google-auth/google-auth";
import {
  signIn,
  signOut,
  googleAuthenticationSuccess,
  googleAuthenticationFailure,
  googleAuthenticationStart,
} from "../../redux/authentication/authentication.actions";

const GoogleAuthContainer = ({
  onSignIn,
  onSignOut,
  isSignedIn,
  onGoogleAuthenticationStart,
  onGoogleAuthenticationFailure,
  onGoogleAuthenticationSuccess,
  auth,
  loading,
  error,
}) => {
  useEffect(() => {
    const onAuthChange = (isSignedIn) => {
      const auth = window.gapi.auth2.getAuthInstance();
      const userData = auth.currentUser.get();
      isSignedIn
        ? onSignIn({
            email: userData.getBasicProfile().getEmail(),
            name: userData.getBasicProfile().getName(),
            id: auth.currentUser.get().getId(),
          })
        : onSignOut();
    };

    window.gapi.load("client:auth2", () => {
      onGoogleAuthenticationStart();
      window.gapi.client
        .init({
          clientId:
            "324930589672-9uo2h0jbiq0qc92dftpnb5eogekpl10e.apps.googleusercontent.com",
          scope: "email",
        })
        .then(
          () => {
            const authAux = window.gapi.auth2.getAuthInstance();
            onGoogleAuthenticationSuccess(authAux);
            onAuthChange(authAux.isSignedIn.get());
            authAux.isSignedIn.listen(onAuthChange);
          },
          (error) => {
            onGoogleAuthenticationFailure(error);
          }
        );
    });
  }, [
    onGoogleAuthenticationSuccess,
    onGoogleAuthenticationStart,
    onGoogleAuthenticationFailure,
    onSignIn,
    onSignOut,
  ]);

  const onSignInClick = () => {
    auth.signIn();
  };

  const onSignOutClick = () => {
    auth.signOut();
  };

  return (
    <GoogleAuth
      onSignInClick={onSignInClick}
      onSignOutClick={onSignOutClick}
      loading={loading}
      error={error}
      isSignedIn={isSignedIn}
    />
  );
};

const mapStateToProps = (state) => ({
  isSignedIn: selectorAuthenticationByKey("isSignedIn")(state),
  auth: selectorAuthenticationByKey("auth")(state),
  loading: selectorAuthenticationByKey("loading")(state),
  error: selectorAuthenticationByKey("error")(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSignIn: (userBasicProfile) => dispatch(signIn(userBasicProfile)),
  onSignOut: () => dispatch(signOut()),
  onGoogleAuthenticationStart: () => dispatch(googleAuthenticationStart()),
  onGoogleAuthenticationFailure: (error) =>
    dispatch(googleAuthenticationFailure(error)),
  onGoogleAuthenticationSuccess: (auth) =>
    dispatch(googleAuthenticationSuccess(auth)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleAuthContainer);
