import React from "react";
import { connect } from "react-redux";
import {
  selectorPageCollectionByKeyAndNedtedKey,
} from "../../redux/homePageCollections/home-page-collections.selectors";
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
  bannerGridTitle: selectorPageCollectionByKeyAndNedtedKey('bannerGrid', 'title')(state),
  bannerGridBody: selectorPageCollectionByKeyAndNedtedKey('bannerGrid', 'body')(state),
});

export default connect(mapStateToProps)(CardsGrid);
