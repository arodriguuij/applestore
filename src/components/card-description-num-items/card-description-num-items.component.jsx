import React from "react";
import "./card-description-num-items.styles.css";

const CardDescriptionNumItems = ({ numItemsOfDevice }) => (
  <div
    data-test="item-description-numItems"
    className="item-description-numItems"
  >
    {numItemsOfDevice}
  </div>
);

export default CardDescriptionNumItems;
