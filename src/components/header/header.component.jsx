import React, { useState, useEffect, lazy } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as ReactLogoIcon } from "../../assets/apple2.svg";
import { ReactComponent as ReactLogoCheckout } from "../../assets/add-to-basket.svg";
import { selectCollectionNamesX } from "../../redux/collectionNames/collection.names.selectors";
import { selectorNumberItems } from "../../redux/checkout/checkout.selectors";
import { fetchCollectionNamesAsync } from "../../redux/collectionNames/collection-names.actions";
import CheckoutIcon from "../checkout-icon/checkout-icon.component";
import Spinner from "../spinner/spinner.component";
import "./header.styles.css";
const ErrorPage = lazy(() => import("../error-page/error-page"));

const Header = ({
  collectionNames,
  numItems,
  loading,
  error,
  onFetchCollectionNamesAsync,
}) => {
  const [toggleMenuMobile, setToggleMenuMobile] = useState("menuOff");

  useEffect(() => {
    onFetchCollectionNamesAsync();
  }, [onFetchCollectionNamesAsync]);

  const onClickMenuHandler = () => {
    setToggleMenuMobile((prevState) => {
      if (prevState === "menuOn") return "menuOff";
      else return "menuOn";
    });
    console.log(toggleMenuMobile);
  };
  const onCloseMenuHandler = () => {
    setToggleMenuMobile("menuOff");
  };

  let content = <Spinner />;
  if (!loading)
    content = (
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
          <ul className="main-nav-ul">
            {collectionNames.map(({ link, name }) => (
              <li className="main-nav-li" key={link}>
                <Link to={`/${link}`} onClick={onCloseMenuHandler}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
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
  loading: selectCollectionNamesX("loading")(state),
  error: selectCollectionNamesX("error")(state),
});

const mapDispatchtoProps = (dispatch) => ({
  onFetchCollectionNamesAsync: () => dispatch(fetchCollectionNamesAsync()),
});

export default connect(mapStateToProps, mapDispatchtoProps)(Header);
