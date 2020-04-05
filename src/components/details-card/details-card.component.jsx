import React, { Fragment } from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
import { Link } from "react-router-dom";
import "./details-card.styles.css";

const DetailsCard = ({id, name, description, collection, price, descriptionExtraTitle, descriptionExtra}) => {
  return (
    <div className="collection-page-description">
      {id ? (
        <Fragment>
          <h2 className="collection-page-name">{name}</h2>
          <ul>
            <li>{description}</li>
            <li>From $<strong>{price}</strong></li>
          </ul>
          <Link to={`/${collection}/${id}`}>
            <CustomButton text="Buy" />
          </Link>
        </Fragment>
      ) : (
        <Fragment>
          <h2 className="collection-page-name">
            {descriptionExtraTitle}
          </h2>
          <ul>
            {descriptionExtra
              .split("$")
              .map((item, index) => (
                <li key={index}>{item}</li>
              ))}
              <li>From $<strong>{price}</strong></li>
          </ul>
          <CustomButton text="Buy" />
        </Fragment>
      )}
    </div>
  );
};

export default DetailsCard;
