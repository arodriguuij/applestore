import React from "react";
import { ReactComponent as ReactLogoIcon } from "../../assets/apple2.svg";
import { ReactComponent as ReactLogoBag } from "../../assets/add-to-basket.svg";
import { Link } from "react-router-dom";
import BagIcon from "../bag-icon/bag-icon.component";
import "./header.styles.css";

const Header = ({ collectionNames, numItemsBag }) => {
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <Link to="/" className="header-li">
            <BagIcon>
              <ReactLogoIcon className="shopping-icon" />
            </BagIcon>
          </Link>
          {collectionNames.map(({ link, name }) => (
            <Link key={link} to={`/${link}`} className="header-li">
              {name}
            </Link>
          ))}
          <Link to="/bag" className="header-li">
            <BagIcon>
              <ReactLogoBag className="shopping-icon" />
              <span className="item-count">{numItemsBag}</span>
            </BagIcon>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
