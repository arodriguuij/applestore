import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.css";


const Header = props => {
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <Link to="/" className="header-li">🍎</Link>
          <Link to="/mac" className="header-li">Mac</Link>
          <Link to="/ipad" className="header-li">iPad</Link>
          <Link to="/iphone" className="header-li">iPhone</Link>
          <Link to="/watch" className="header-li">Watch</Link>
          <li className="header-li">👜</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
