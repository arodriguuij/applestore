import React from "react";
import { connect } from "react-redux";
import {
  selectorXtitle,
  selectorXbody,
} from "../../redux/homePageCollections/homePageCollections.selectors";
import Card from "../../components/card/card.components";
import "./cards-grid.styles.css";

const CardsGrid = ({
  bannerGridTitle,
  bannerGridBody,
}) => {
  return (
    <div className="cards-grid">
      <h2>{bannerGridTitle}</h2>
      <div className="card-items">
        {bannerGridBody.map((device, index) => {
          return <Card key={index} {...device} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  bannerGridTitle: selectorXtitle('bannerGrid')(state),
  bannerGridBody: selectorXbody('bannerGrid')(state),
});

export default connect(mapStateToProps)(CardsGrid);
