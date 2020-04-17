import React, { useEffect } from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import { authenticationSelectorX } from "../../redux/authentication/authentication.selector";
import {
  signIn,
  signOut,
  googleAuthenticationInitializeStart,
} from "../../redux/authentication/authentication.actions";

const GoogleAuth = ({
  onSignIn,
  onSignOut,
  isSignedIn,
  onGoogleAuthenticationInitializeStart,
  auth,
}) => {
  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "324930589672-9uo2h0jbiq0qc92dftpnb5eogekpl10e.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          const authAux = window.gapi.auth2.getAuthInstance();
          onGoogleAuthenticationInitializeStart(authAux);
          onAuthChange(authAux.isSignedIn.get());
          authAux.isSignedIn.listen(onAuthChange);
        });
    });
  }, [onGoogleAuthenticationInitializeStart]);

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

  const onSignInClick = () => {
    auth.signIn();
  };

  const onSignOutClick = () => {
    auth.signOut();
  };

  const renderAuthButton = () => {
    if (isSignedIn === null) return null;
    else if (isSignedIn)
      return <CustomButton action={onSignOutClick}>Sign out</CustomButton>;
    else
      return (
        <CustomButton action={onSignInClick}>Sign in with Google</CustomButton>
      );
  };

  return renderAuthButton();
};

const mapStateToProps = (state) => ({
  isSignedIn: authenticationSelectorX("isSignedIn")(state),
  auth: authenticationSelectorX("auth")(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSignIn: (userBasicProfile) => dispatch(signIn(userBasicProfile)),
  onSignOut: () => dispatch(signOut()),
  onGoogleAuthenticationInitializeStart: (auth) =>
    dispatch(googleAuthenticationInitializeStart(auth)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);
