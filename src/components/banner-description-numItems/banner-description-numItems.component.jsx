import React from "react";
import { selectNumItemsOfDevice } from "../../redux/bag/bag.selectors";
import { connect } from "react-redux";
import "./banner-description-numItems.styles.css";

const BannerDescriptionNumItems = ({ numItemsOfDevice }) => {
  return <div className="item-description-numItems">{numItemsOfDevice}</div>;
};
const mapStateToProps = (state, ownProps) => ({
  numItemsOfDevice: selectNumItemsOfDevice(ownProps.id)(state),
});
export default connect(mapStateToProps)(BannerDescriptionNumItems);
