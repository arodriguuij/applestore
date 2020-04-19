import React from "react";
import Card from "../card/card.components";
import "./cards-grid.styles.css";

const CardsGrid = ({ bannerGridTitle, bannerGridBody }) => (
  <div className="cards-grid">
    <h2>{bannerGridTitle}</h2>
    <div className="card-items">
      {bannerGridBody.map((device, index) => {
        return <Card key={index} {...device} />;
      })}
    </div>
  </div>
);

export default CardsGrid;
