import React from "react";
import CardDescriptionNumItems from "../card-description-numItems/card-description-numItems.component";
import CardDescriptionPrice from "../card-description-price/card-description-price.component";
import "./card-description-price-and-numitems.styles.css";

const CardDescriptionPriceAndNumitems = ({ price, id }) => {
  return (
    <div className="card-description-price-and-numItems">
      <CardDescriptionPrice price={price} />
      <CardDescriptionNumItems id={id}/>
    </div>
  );
};

export default CardDescriptionPriceAndNumitems;
