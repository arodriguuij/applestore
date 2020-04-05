import React, { Fragment } from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
import { Link } from "react-router-dom";
import "./details-card.styles.css";

const DetailsCard = (props) => {
  return (
    <div className="collection-page-description">
      {props.id ? (
        <Fragment>
          <h2 className="collection-page-name">{props.name}</h2>
          <ul>
            <li>{props.description}</li>
            <li>From $<strong>{props.extraInformation.price}</strong></li>
          </ul>
          <Link to={`/${props.collection}/${props.id}`}>
            <CustomButton text="Buy" />
          </Link>
        </Fragment>
      ) : (
        <Fragment>
          <h2 className="collection-page-name">
            {props.extraInformation.descriptionExtraTitle}
          </h2>
          <ul>
            {props.extraInformation.descriptionExtra
              .split("$")
              .map((item, index) => (
                <li key={index}>{item}</li>
              ))}
              <li>From $<strong>{props.extraInformation.price}</strong></li>
          </ul>
          <CustomButton text="Buy" />
        </Fragment>
      )}
    </div>
  );
};

export default DetailsCard;
