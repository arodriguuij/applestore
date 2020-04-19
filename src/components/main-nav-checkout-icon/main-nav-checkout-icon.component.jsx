import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ReactLogoCheckout } from "../../assets/checkout.svg";
import CheckoutIcon from "../checkout-icon/checkout-icon.component";
import "./main-nav-checkout-icon.styles.css";

const MainNavCheckoutIcon = ({ onCloseMenuHandler, numItems }) => (
  <div className="main-nav_item_checkout_icon">
    <div className="main-nav_checkout">
      <Link to="/checkout" onClick={onCloseMenuHandler}>
        <CheckoutIcon>
          <ReactLogoCheckout className="shopping-icon"/>
        </CheckoutIcon>
      </Link>
      <div className="item-count">{numItems}</div>
    </div>
  </div>
);

export default MainNavCheckoutIcon;
