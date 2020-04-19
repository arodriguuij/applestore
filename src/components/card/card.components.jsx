import React from "react";
import CardImage from "../card-image/card-image.component";
import CardDescription from "../card-description/card-description.component";
import CardHeader from "../card-header/card-header.component";
import "./card.styles.css";

const Card = ({
  collection,
  id,
  img,
  name,
  extra,
  description,
  price,
  subtype,
  special,
}) => {

  let classes;
  if(collection === "Accessories"){
    if(special)
    classes="card-dark card-special-top-right"
    else
    classes="card-dark"
  }
  else{
    if(special)
    classes="card-light card-special-top-right"
    else
    classes="card-light"
  }

  return (
    <div data-test="card" className={classes}>
      <div className="card-content">
        <CardHeader
          data-test="card-header"
          name={name}
          collection={collection}
          id={id}
          extra={extra}
          text="buy"
        />
        <CardImage data-test="card-image" img={img} />
        <CardDescription
          data-test="card-description"
          description={description}
          price={price}
          subtype={subtype}
          id={id}
        />
      </div>
    </div>
  );
};

export default Card;
