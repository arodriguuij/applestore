import React, { useState, useEffect, lazy } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as ReactLogoIcon } from "../../assets/apple.svg";
import { ReactComponent as ReactLogoCheckout } from "../../assets/checkout.svg";
import { selectCollectionNamesX } from "../../redux/collectionNames/collection.names.selectors";
import { selectorNumberItems } from "../../redux/checkout/checkout.selectors";
import { fetchCollectionNamesStart } from "../../redux/collectionNames/collection-names.actions";
import CheckoutIcon from "../checkout-icon/checkout-icon.component";
import GoogleAuth from "../../components/google-auth/google-auth";
import { authenticationSelectorX } from "../../redux/authentication/authentication.selector";
import "./header.styles.css";

const ErrorPage = lazy(() => import("../error-page/error-page"));

const Header = ({
  collectionNames,
  numItems,
  error,
  onFetchCollectionNamesStart,
  isSignedIn,
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

  let content = (
    <header className="main-header">
      <div className="main-nav_item_mobile" onClick={onClickMenuHandler}>
        <div className="main-nav_item_mobile_menu"></div>
        <div className="main-nav_item_mobile_menu"></div>
        <div className="main-nav_item_mobile_menu"></div>
      </div>
      <nav className={`main-nav ${toggleMenuMobile}`}>
        <div className="main-nav_main_icon">
          <Link to="/" onClick={onCloseMenuHandler}>
            <CheckoutIcon>
              <ReactLogoIcon />
            </CheckoutIcon>
          </Link>
        </div>
        <ul className="main-nav-ul main-nav-li">
          {collectionNames.map(({ link, name }) => (
            <Link to={`/${link}`} key={link} onClick={onCloseMenuHandler}>
              <li className="main-nav-li">{name}</li>
            </Link>
          ))}
          {isSignedIn ? (
            <Link
              to={`/myorders`}
              key={"myorders"}
              onClick={onCloseMenuHandler}
            >
              <li className="main-nav-li">My orders</li>
            </Link>
          ) : null}
        </ul>
        <div className="main-nav_main_icon">
          <GoogleAuth />
        </div>
        <div className="main-nav_item_checkout_icon">
          <div className="main-nav_checkout">
            <Link to="/checkout" onClick={onCloseMenuHandler}>
              <CheckoutIcon>
                <ReactLogoCheckout className="shopping-icon" />
              </CheckoutIcon>
            </Link>
            <div className="item-count">{numItems}</div>
          </div>
        </div>
      </nav>
    </header>
  );
  if (error) content = <ErrorPage text="Something was wrong... Try again :|" />;

  return content;
};

const mapStateToProps = (state) => ({
  numItems: selectorNumberItems(state),
  collectionNames: selectCollectionNamesX("collectionNames")(state),
  error: selectCollectionNamesX("error")(state),
  isSignedIn: authenticationSelectorX("isSignedIn")(state),
});

const mapDispatchtoProps = (dispatch) => ({
  onFetchCollectionNamesStart: () => dispatch(fetchCollectionNamesStart()),
});

export default connect(mapStateToProps, mapDispatchtoProps)(Header);
