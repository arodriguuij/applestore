import React from "react";
import { ReactComponent as ReactLogoIcon } from "../../assets/apple2.svg";
import { ReactComponent as ReactLogoBag } from "../../assets/add-to-basket.svg";
import { selectCollection } from "../../redux/collectionNames/collection.names.selectors";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import BagIcon from "../../components/bag-icon/bag-icon.component";
import { selectorNumberItemsBag } from "../../redux/bag/bag.selectors";
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

const mapStateToProps = (state) => ({
  collectionNames: selectCollection(state),
  numItemsBag: selectorNumberItemsBag(state),
});

export default connect(mapStateToProps)(Header);
