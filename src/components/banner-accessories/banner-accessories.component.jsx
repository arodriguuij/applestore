import React, { Fragment } from "react";
import { connect } from "react-redux";
import {
  selectorBannerAccessoriesTitle,
  selectorBannerAccessoriesBody,
} from "../../redux/devicesMainPage/devices.selectors";
import CardGrid from "../card-grid/card-grid.components";
import "./banner-accessories.styles.css";

const BannerAccessories = ({
  bannerAccessoriesTitle,
  bannerAccessoriesBody,
}) => {
  return (
    <div className="banner-accessories">
      <h2 className="banner-title">{bannerAccessoriesTitle}</h2>
      <div className="collection-page-items">
        {bannerAccessoriesBody.map((device, index) => {
          return <CardGrid key={index} {...device} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  bannerAccessoriesTitle: selectorBannerAccessoriesTitle(state),
  bannerAccessoriesBody: selectorBannerAccessoriesBody(state),
});

export default connect(mapStateToProps)(BannerAccessories);
