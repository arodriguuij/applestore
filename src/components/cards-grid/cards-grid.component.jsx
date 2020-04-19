import React from "react";
import Card from "../card/card.components";
import "./cards-grid.styles.css";

const CardsGrid = ({ bannerGridTitle, bannerGridBody }) => (
  <div data-test="cards-grid" className="cards-grid">
    <h2 data-test="cards-grid-title">{bannerGridTitle}</h2>
    <div data-test="card-grid-items" className="card-items">
      {bannerGridBody.map((device, index) => {
        return <Card data-test="card" key={index} {...device} />;
      })}
    </div>
  </div>
);

export default CardsGrid;
