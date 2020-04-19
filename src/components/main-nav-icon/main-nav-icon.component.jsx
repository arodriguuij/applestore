import React from "react";
import CheckoutIcon from "../checkout-icon/checkout-icon.component";
import { ReactComponent as ReactLogoIcon } from "../../assets/apple.svg";
import { Link } from "react-router-dom";
import "./main-nav-icon.styles.css";

const MainNavIcon = ({onCloseMenuHandler}) => (
  <div className="main-nav_main_icon">
    <Link to="/" onClick={onCloseMenuHandler}>
      <CheckoutIcon>
        <ReactLogoIcon />
      </CheckoutIcon>
    </Link>
  </div>
);

export default MainNavIcon;
