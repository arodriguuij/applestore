import React, { useEffect } from "react";
import "./collection-page.styles.css";
import { connect } from "react-redux";
import { fetchCollectionAsyn } from "../../redux/shop/shop.actions";
import Cart from "../../components/cart/cart.component";

const CollectionPage = props => {
  const { onFetchCollectionAsyn, match } = props;
  const { path } = match;
  useEffect(() => {
    if (props[`collection_${props.match.path.substr(1)}`].length === 0)
      return onFetchCollectionAsyn(props.match.path.substr(1));
  }, [path]);

  return (
    <div className="collection-page-main">
      {Object.entries(props[`collection_${props.match.path.substr(1)}`]).map(
        ([id, device]) => (
          <Cart
            key={id}
            {...device}
            id={id}
            collection={props.match.path.substr(1)}
          />
        )
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  collection_mac: state.shop.collection_mac,
  collection_iphone: state.shop.collection_iphone,
  collection_ipad: state.shop.collection_ipad,
  collection_watch: state.shop.collection_watch
});

const mapDispatchToProps = dispatch => ({
  onFetchCollectionAsyn: collectionName =>
    dispatch(fetchCollectionAsyn(collectionName))
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage);
