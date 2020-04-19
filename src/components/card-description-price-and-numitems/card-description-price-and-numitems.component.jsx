import React from "react";
import CardDescriptionNumItemsContainer from "../../containers/card-description-num-items/card-description-num-items.container";
import CardDescriptionPrice from "../card-description-price/card-description-price.component";
import "./card-description-price-and-numitems.styles.css";

const CardDescriptionPriceAndNumitems = ({ price, id }) => (
  <div className="card-description-price-and-numItems">
    <CardDescriptionPrice price={price} />
    <CardDescriptionNumItemsContainer id={id} />
  </div>
);

export default CardDescriptionPriceAndNumitems;
