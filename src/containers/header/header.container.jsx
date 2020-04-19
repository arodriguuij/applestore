import React, { useState, useEffect } from "react";
import Header from "../../components/header/header.component";
import { connect } from "react-redux";
import { selectorCollectionNamesByKey } from "../../redux/collectionNames/collection.names.selectors";
import { selectorNumberItems } from "../../redux/checkout/checkout.selectors";
import { fetchCollectionNamesStart } from "../../redux/collectionNames/collection-names.actions";
import { selectorAuthenticationByKey } from "../../redux/authentication/authentication.selector";

const HeaderContainer = ({
  collectionNames,
  numItems,
  error,
  onFetchCollectionNamesStart,
  isSignedIn,
  loading,
}) => {
  const [toggleMenuMobile, setToggleMenuMobile] = useState("menuOff");
  useEffect(() => {
    onFetchCollectionNamesStart();
  }, [onFetchCollectionNamesStart]);

  const onClickMenuHandler = () => {
    setToggleMenuMobile((prevState) => {
      if (prevState === "menuOn") return "menuOff";
      else return "menuOn";
    });
  };
  const onCloseMenuHandler = () => {
    setToggleMenuMobile("menuOff");
  };

  return (
    <Header
      onClickMenuHandler={onClickMenuHandler}
      toggleMenuMobile={toggleMenuMobile}
      onCloseMenuHandler={onCloseMenuHandler}
      collectionNames={collectionNames}
      isSignedIn={isSignedIn}
      numItems={numItems}
      loading={loading}
      error={error}
    />
  );
};

const mapStateToProps = (state) => ({
  numItems: selectorNumberItems(state),
  collectionNames: selectorCollectionNamesByKey("collectionNames")(state),
  error: selectorCollectionNamesByKey("error")(state),
  isSignedIn: selectorAuthenticationByKey("isSignedIn")(state),
  loading: selectorCollectionNamesByKey("loading")(state),
});
const mapDispatchtoProps = (dispatch) => ({
  onFetchCollectionNamesStart: () => dispatch(fetchCollectionNamesStart()),
});

export default connect(mapStateToProps, mapDispatchtoProps)(HeaderContainer);
