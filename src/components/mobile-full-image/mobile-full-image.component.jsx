import React from "react";
import { connect } from "react-redux";
import { selectorPageCollectionByKeyAndNedtedKey } from "../../redux/homePageCollections/home-page-collections.selectors";
import "./mobile-full-image.styles.css";

const MobileImageFull = ({ bannerImgMoblie }) => (
  <img alt="item" className="bannerMobile" src={bannerImgMoblie} />
);

const mapStateToProps = (state) => ({
  bannerImgMoblie: selectorPageCollectionByKeyAndNedtedKey(
    "banner",
    "imgMobile"
  )(state),
});

export default connect(mapStateToProps)(MobileImageFull);
