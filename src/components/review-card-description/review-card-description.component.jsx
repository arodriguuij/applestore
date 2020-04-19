import React, { Fragment } from "react";
import CardDescriptionNumItemsContainer from "../../containers/card-description-num-items/card-description-num-items.container";
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
        <CardDescriptionNumItemsContainer id={id} />
      </div>
    </div>
  </Fragment>
);

export default ReviewCardDescription;
