import React from "react";
import Card from "../card/card.component";
import DetailsCard from "../details-card/details-card.component";
import "./card-with-description.styles.css";

const CardWithDescription = (props) => {
  return (
    <div className="card-with-description">
      <div className="card-with-description-card">
        <Card
          {...props.device}
          id={props.id}
          collection={props.collection}
          classes="home-page-product"
        />
      </div>
      <div className="card-with-description-description">
        <DetailsCard
          name={props.device.name}
          description={props.device.description}
          collection={props.collection}
          id={props.id}
          extraInformation={props.device}
        />
      </div>
    </div>
  );
};

export default CardWithDescription;
