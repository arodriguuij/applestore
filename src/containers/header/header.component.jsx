import React from "react";
import { ReactComponent as ReactLogoIcon } from "../../assets/apple2.svg";
import { ReactComponent as ReactLogoBag } from "../../assets/add-to-basket.svg";
import { selectCollection } from "../../redux/collectionNames/collection.names.selectors";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import BagIcon from "../../components/bag-icon/bag-icon.component";
import "./header.styles.css";

const Header = ({ collectionNames }) => {
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <Link to="/" className="header-li">
            <BagIcon>
              <ReactLogoIcon className="shopping-icon" />
            </BagIcon>
          </Link>
          {collectionNames.map(({link, name}) => (
            <Link
              key={link}
              to={`/${link}`}
              className="header-li"
            >
              {name}
            </Link>
          ))}
          <div className="header-li">
            <BagIcon>
              <ReactLogoBag className="shopping-icon" />
              <span className="item-count">10</span>
            </BagIcon>
          </div>
        </ul>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => ({
  collectionNames: selectCollection(state),
});

export default connect(mapStateToProps)(Header);
