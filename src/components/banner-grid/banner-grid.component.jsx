import React from "react";
import { connect } from "react-redux";
import {
  selectorBannerGridTitle,
  selectorBannerGridBody,
} from "../../redux/devicesMainPage/devices.selectors";
import CardGrid from "../card-grid/card-grid.components";
import "./banner-grid.styles.css";

const BannerGrid = ({
  bannerGridTitle,
  bannerGridBody,
}) => {
  return (
    <div className="banner-grid">
      <h2 className="banner-title">{bannerGridTitle}</h2>
      <div className="banner-items">
        {bannerGridBody.map((device, index) => {
          return <CardGrid key={index} {...device} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  bannerGridTitle: selectorBannerGridTitle(state),
  bannerGridBody: selectorBannerGridBody(state),
});

export default connect(mapStateToProps)(BannerGrid);
