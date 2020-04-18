import React, { Fragment } from "react";
import CardDescriptionNumItems from "../card-description-numItems/card-description-numItems.component";
import "./review-card-description.styles.css";

const ReviewCardDescription = ({ name, price, id, img }) => (
  <Fragment>
    <div className="review-card-description-container">
      <img
        alt={"device"}
        src={img}
        className="review-card-description-img"
      ></img>
      <div>{name}</div>
      <div>
        From <strong>{price}€</strong>
      </div>
      <div>
        <CardDescriptionNumItems id={id} />
      </div>
    </div>
  </Fragment>
);

export default ReviewCardDescription;
