import React from "react";
import CardDescriptionTitle from "../card-description-title/card-description-title.component";
import CardDescriptionPriceAndNumitems from "../card-description-price-and-numitems/card-description-price-and-numitems.component";
import "./card-description.styles.css";

const CardDescription = ({ id, description, price, subtype }) => {
  return (
    <div className="card-description">
      <CardDescriptionTitle description={description} subtype={subtype} />
      <CardDescriptionPriceAndNumitems price={price} id={id} />
    </div>
  );
};

export default CardDescription;
