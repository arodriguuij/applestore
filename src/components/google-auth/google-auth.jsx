import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import SpinnerSmall from "../spinner-small/spinner-small.component";

const GoogleAuth = ({
  onSignOutClick,
  onSignInClick,
  isSignedIn,
  loading,
  error,
}) => {
  
  const getContent = () => {
    if (loading) return <SpinnerSmall />;
    else {
      if (error) return null;
      else {
        if (isSignedIn)
          return <CustomButton action={onSignOutClick}>Sign out</CustomButton>;
        else
          return (
            <CustomButton action={onSignInClick}>
              Sign in with Google
            </CustomButton>
          );
      }
    }
  };
  return getContent();
};

export default GoogleAuth;
