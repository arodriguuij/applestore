import React from "react";
import Card from "../card/card.component";
import DetailsCard from "../details-card/details-card.component";
import "./card-with-description.styles.css";

const CardWithDescription = ({id, collection, device}) => {
  return (
    <div className="card-with-description">
      <div className="card-with-description-card">
        <Card
          id={id}
          classes="home-page-product"
          collection={collection}
          img={device.img}
        />
      </div>
      <div className="card-with-description-description">
        <DetailsCard
          id={id}
          name={device.name}
          description={device.description}
          collection={collection}
          price={device.price}
          descriptionExtraTitle={device.descriptionExtraTitle}
          descriptionExtra={device.descriptionExtra}
        />
      </div>
    </div>
  );
};

export default CardWithDescription;
