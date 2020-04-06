import React from "react";
import Card from "../card/card.component";
import DetailsCard from "../details-card/details-card.component";
import "./card-with-description.styles.css";

const CardWithDescription = ({
  id,
  collection,
  device,
  type,
  clickable,
  incrementItem,
  decrementItem,
  removeItem,
  addItem,
}) => {
  return (
    <div className="card-with-description">
      <div className="card-with-description-card">
        <Card
          id={id}
          classes="home-page-product"
          collection={collection}
          img={device.img}
          clickable={clickable}
        />
      </div>
      <div className="card-with-description-description">
        <DetailsCard
          id={id}
          device={device}
          collection={collection}
          addItem={addItem}
          removeItem={removeItem}
          incrementItem={incrementItem}
          decrementItem={decrementItem}
          type={type}
        />
      </div>
    </div>
  );
};

export default CardWithDescription;
