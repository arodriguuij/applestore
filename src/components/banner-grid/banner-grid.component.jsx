import React from "react";
import { connect } from "react-redux";
import {
  selectorXtitle,
  selectorXbody,
} from "../../redux/homePageCollections/homePageCollections.selectors";
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
  bannerGridTitle: selectorXtitle('bannerGrid')(state),
  bannerGridBody: selectorXbody('bannerGrid')(state),
});

export default connect(mapStateToProps)(BannerGrid);
