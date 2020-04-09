import React from "react";
import { selectorMainImage } from "../../redux/devicesMainPage/devices.selectors";
import { connect } from "react-redux";
import "./main-image.styles.css";

const MainImage = ({ mainImage }) => {
  return (
    <div className="mainImage">
      <img alt="device" src={mainImage} />
      <div className="mainImage-text">
        <h1>Make some noise.</h1>
        <h1>Cancel it too.</h1>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  mainImage: selectorMainImage(state),
});

export default connect(mapStateToProps)(MainImage);
