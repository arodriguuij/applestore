import React from "react";
import { ReactComponent as ReactLogoIcon } from "../../assets/apple2.svg";
import { ReactComponent as ReactLogoCheckout } from "../../assets/add-to-basket.svg";
import { Link } from "react-router-dom";
import CheckoutIcon from "../checkout-icon/checkout-icon.component";
import "./header.styles.css";
import { useState } from "react";

const Header = ({ collectionNames, numItems }) => {
  const [toggleMenuMobile, setToggleMenuMobile] = useState("menuOff");

  const onClickMenuHandler = () => {
    setToggleMenuMobile((prevState) => {
      if (prevState === "menuOn") return "menuOff";
      else return "menuOn";
    });
    console.log(toggleMenuMobile);
  };
  const onCloseMenuHandler= () => {
    setToggleMenuMobile("menuOff");
  }
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
        <ul className="main-nav-ul">
          {collectionNames.map(({ link, name }) => (
            <li className="main-nav-li" key={link}>
              <Link to={`/${link}`} onClick={onCloseMenuHandler}>{name}</Link>
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
};

export default Header;
