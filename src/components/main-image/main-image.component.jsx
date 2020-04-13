import React from "react";
import { selectorMainImageX } from "../../redux/homePageCollections/homePageCollections.selectors";
import { connect } from "react-redux";
import "./main-image.styles.css";

const MainImage = ({ img, text1, text2 }) => {
  return (
    <div className="main-image">
      <img className="main-image-img" alt="device" src={img} />
      <div>
        <h1 className="main-image-text-item">{text1}</h1>
        <h1 className="main-image-text-item">{text2}</h1>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  img: selectorMainImageX("img")(state),
  text1: selectorMainImageX("text1")(state),
  text2: selectorMainImageX("text2")(state),
});

export default connect(mapStateToProps)(MainImage);
