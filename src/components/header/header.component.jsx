import React from "react";
import { ReactComponent as ReactLogoIcon } from "../../assets/apple2.svg";
import { ReactComponent as ReactLogoCheckout} from "../../assets/add-to-basket.svg";
import { Link } from "react-router-dom";
import CheckoutIcon from "../checkout-icon/checkout-icon.component";
import "./header.styles.css";

const Header = ({ collectionNames, numItems }) => {
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <Link to="/" className="header-li">
            <CheckoutIcon>
              <ReactLogoIcon className="shopping-icon" />
            </CheckoutIcon>
          </Link>
          {collectionNames.map(({ link, name }) => (
            <Link key={link} to={`/${link}`} className="header-li">
              {name}
            </Link>
          ))}
          <Link to="/checkout" className="header-li">
            <CheckoutIcon>
              <ReactLogoCheckout className="shopping-icon" />
              <span className="item-count">{numItems}</span>
            </CheckoutIcon>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
