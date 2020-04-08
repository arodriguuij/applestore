import React from "react";
import "./details-card.styles.css";
import CardWithDescriptionContent from "../card-with-description-content/card-with-description-content.component";
import CardWithDescriptionButton from "../card-with-description-button/card-with-description-button.component";
import CardWithDescriptionTitle from "../card-with-description-title/card-with-description-title.component";

const DetailsCard = ({ id, device, addItem, removeItem, type, collection, incrementItem, decrementItem }) => {
  const { name, description, price, quantity } = device;
  return (
    <div className="collection-page-description">
      <CardWithDescriptionTitle
        name={name}
      />
      <CardWithDescriptionContent
        description={description}
        type={type}
        price={price}
        quantity={quantity}
        id={id}
      />
      <CardWithDescriptionButton
        id={id}
        collection={collection}
        addItem={addItem}
        removeItem={removeItem}
        incrementItem={incrementItem}
        decrementItem={decrementItem}
        quantity={quantity}
        type={type}
      />
    </div>
  );
};

export default DetailsCard;