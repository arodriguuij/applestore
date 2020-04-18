import React from "react";
import { connect } from "react-redux";
import {  selectorPageCollectionByKeyAndNedtedKey,} from "../../redux/homePageCollections/home-page-collections.selectors";
import "./main-image.styles.css";

const MainImage = ({ img, text1, text2 }) => (
  <div className="main-image">
    <img className="main-image-img" alt="device" src={img} />
    <div>
      <h1 className="main-image-text-item">{text1}</h1>
      <h1 className="main-image-text-item">{text2}</h1>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  img: selectorPageCollectionByKeyAndNedtedKey("mainImage", "img")(state),
  text1: selectorPageCollectionByKeyAndNedtedKey("mainImage", "text1")(state),
  text2: selectorPageCollectionByKeyAndNedtedKey("mainImage", "text2")(state),
});

export default connect(mapStateToProps)(MainImage);
