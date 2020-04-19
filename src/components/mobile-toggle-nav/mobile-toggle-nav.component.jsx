import React from "react";
import "./mobile-toggle-nav.styles.css";

const MobileToggleNav = ({onClickMenuHandler}) => (
  <div className="main-nav_item_mobile" onClick={onClickMenuHandler}>
    <div className="main-nav_item_mobile_menu"></div>
    <div className="main-nav_item_mobile_menu"></div>
    <div className="main-nav_item_mobile_menu"></div>
  </div>
);

export default MobileToggleNav;
