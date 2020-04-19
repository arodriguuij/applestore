import React from "react";
import { Link } from "react-router-dom";
import GoogleAuthContainer from "../../containers/google-auth/google-auth.container";
import SpinnerSmall from "../spinner-small/spinner-small.component";
import MobileToggleNav from "../mobile-toggle-nav/mobile-toggle-nav.component";
import MainNavIcon from "../main-nav-icon/main-nav-icon.component";
import MainNavCheckoutIcon from "../main-nav-checkout-icon/main-nav-checkout-icon.component";
import MainNavCategories from "../main-nav-categories/main-nav-categories.component";
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
  const getCategories = () => {
    if (loading) return <SpinnerSmall />;
    else if (error)
      return (
        <li className="error-categories">...Error loading categories...</li>
      );
    else
      return collectionNames.map(({ link, name }) => (
        <Link to={`/${link}`} key={link} onClick={onCloseMenuHandler}>
          <li className="main-nav-li">{name}</li>
        </Link>
      ));
  };

  const getContent = () => (
    <header className="main-header">
      <MobileToggleNav onClickMenuHandler={onClickMenuHandler} />
      <nav className={`main-nav ${toggleMenuMobile}`}>
        <MainNavIcon onCloseMenuHandler={onCloseMenuHandler} />
        <MainNavCategories
          categoriesNav={getCategories()}
          isSignedIn={isSignedIn}
          onCloseMenuHandler={onCloseMenuHandler}
        />
        <div className="main-nav_main_icon">
          <GoogleAuthContainer />
        </div>
        <MainNavCheckoutIcon
          onCloseMenuHandler={onCloseMenuHandler}
          numItems={numItems}
        />
      </nav>
    </header>
  );

  return getContent();
};

export default Header;
