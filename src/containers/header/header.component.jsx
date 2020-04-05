import React, {useEffect} from "react";
import { ReactComponent as ReactLogoIcon } from "../../assets/apple2.svg";
import { ReactComponent as ReactLogoBag } from "../../assets/add-to-basket.svg";
import {selectCollection, selectLoading, selectError} from '../../redux/collectionNames/collection.names.selectors';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../../components/spinner/spinner.component";
import BagIcon from "../../components/bag-icon/bag-icon.component";
import "./header.styles.css"; 

const Header = (props) => {
  const {collectionNames,loading} = props;
  useEffect(() => {
  }, [collectionNames,loading])

  useEffect(() => {
    debugger;
  },)

  let content = <Spinner />;
  if (!loading)
    content = collectionNames.map((collectionDevice) => (
      <Link
        key={collectionDevice.link}
        to={`/${collectionDevice.link}`}
        className="header-li"
      >
        {collectionDevice.name}
      </Link>
    ));

  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <Link to="/" className="header-li">
            <BagIcon>
              <ReactLogoIcon className="shopping-icon" />
            </BagIcon>
          </Link>
          {content}
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
  loading: selectLoading(state),
  error: selectError(state)
});

export default connect(mapStateToProps)(Header);
