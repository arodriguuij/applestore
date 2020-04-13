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
  let classes = [];
  collection === "Accessories"
    ? classes.push("card-dark")
    : classes.push("card-light");
  special && classes.push(" card-special-top-right");

  return (
    <div className={classes}>
      <div className="card-content">
        <CardHeader
          name={name}
          collection={collection}
          id={id}
          extra={extra}
          text="buy"
        />
        <CardImage img={img} />
        <CardDescription
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
