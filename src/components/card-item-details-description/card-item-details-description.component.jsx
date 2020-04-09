import React, { Fragment } from "react";
import BannerDescriptionNumItems from "../banner-description-numItems/banner-description-numItems.component";
import "./card-item-details-description.styles.css";

const CardItemDetailsDescription = ({ name, description, price, id, img }) => {
  return (
    <Fragment>
      <div className="card-item-details-description">
        <img src={img}></img>
        <div>{name}</div>
        <div>
          From <strong>{price}€</strong>
        </div>
        <div>
          <BannerDescriptionNumItems id={id} />
        </div>
      </div>
    </Fragment>
  );
};

export default CardItemDetailsDescription;
