import React from "react";
import Card from "../../components/card/card.component";
import { connect } from "react-redux";
import {
  selectorBannerTitle,
  selectorBannerBody,
} from "../../redux/devicesMainPage/devices.selectors";
import "./banner.styles.css";

const Banner = ({ bannerTitle, bannerBody }) => {
  return (
    <div className="banner">
      <h2 className="banner-title">{bannerTitle}</h2>
      <div className="banner-content">
        {bannerBody.map((item, index) => (
          <div
            className="banner-content-item"
            key={index}
          >
            <div className="banner-content-item-card">
              <Card {...item} />
            </div>
            <div className="banner-content-item-description">
              <p >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  bannerTitle: selectorBannerTitle(state),
  bannerBody: selectorBannerBody(state),
});

export default connect(mapStateToProps)(Banner);
