import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ReactLogoIcon } from "../../assets/apple.svg";
import { ReactComponent as ReactLogoCheckout } from "../../assets/checkout.svg";
import CheckoutIcon from "../checkout-icon/checkout-icon.component";
import GoogleAuth from "../../components/google-auth/google-auth";
import SpinnerSmall from "../spinner-small/spinner-small.component";
import "./header.styles.css";

const Header = ({
  onClickMenuHandler,
  toggleMenuMobile,
  onCloseMenuHandler,
  collectionNames,
  isSignedIn,
  numItems,
  loading,
  error,
}) => {
  let categoriesNav;
  if (loading) categoriesNav = <SpinnerSmall />;
  else if (error)
    categoriesNav = (
      <li className="error-categories">...Error loading categories...</li>
    );
  else
    categoriesNav = collectionNames.map(({ link, name }) => (
      <Link to={`/${link}`} key={link} onClick={onCloseMenuHandler}>
        <li className="main-nav-li">{name}</li>
      </Link>
    ));

  return (
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
          {categoriesNav}
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
};

export default Header;
