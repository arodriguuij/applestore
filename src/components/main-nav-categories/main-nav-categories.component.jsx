import React from "react";
import { Link } from "react-router-dom";
import "./main-nav-categories.styles.css";

const MainNavCategories = ({categoriesNav, isSignedIn, onCloseMenuHandler}) => (
  <ul className="main-nav-ul main-nav-li">
    {categoriesNav}
    {isSignedIn ? (
      <Link to={`/myorders`} key={"myorders"} onClick={onCloseMenuHandler}>
        <li className="main-nav-li">My orders</li>
      </Link>
    ) : null}
  </ul>
);

export default MainNavCategories;
