import React from "react";
import "./card-description-title.styles.css";

const CardDescriptionTitle = ({ description, subtype }) => (
  <h4 className="card-description-title-container">
    <p className="card-description-title">{description}</p>
    <strong className={`colorDefault ${subtype}`}>{subtype}</strong>
  </h4>
);

export default CardDescriptionTitle;
