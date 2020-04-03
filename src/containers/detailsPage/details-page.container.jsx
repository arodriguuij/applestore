import React from "react";
import "./details-page.styles.css";
import { connect } from "react-redux";
import Cart from "../../components/cart/cart.component";

const DetailsPage = props => {
  let [_, collection, device] = props.match.path.split("/");

  console.log("details", collection, device);
  if (props[`collection_${collection}`][device])
    return (
      <div className="details-page-main">
        <Cart
          {...props[`collection_${collection}`][device]}
          collection={collection}
        />
      </div>
    );
  else
    return (
      <div className="details-page-main">I dunoo where that device is :(</div>
    );
};

const mapStateToProps = state => ({
  collection_mac: state.shop.collection_mac,
  collection_iphone: state.shop.collection_iphone,
  collection_ipad: state.shop.collection_ipad,
  collection_watch: state.shop.collection_watch
});
export default connect(mapStateToProps)(DetailsPage);
