import React from "react";
import CardDescriptionTitle from "../card-description-title/card-description-title.component";
import CardDescriptionNumItemsContainer from "../../containers/card-description-num-items/card-description-num-items.container";
import CardDescriptionPrice from "../card-description-price/card-description-price.component";
import "./card-description.styles.css";

const CardDescription = ({ id, description, price, subtype }) => (
  <div data-test="card-description" className="card-description">
    <CardDescriptionTitle
      data-test="card-description-title"
      description={description}
      subtype={subtype}
    />
    <div
      data-test="card-description-price-and-numItems"
      className="card-description-price-and-numItems"
    >
      <CardDescriptionPrice data-test="card-description-price" price={price} />
      <CardDescriptionNumItemsContainer
        data-test="card-description-num-items"
        id={id}
      />
    </div>
  </div>
);

export default CardDescription;
