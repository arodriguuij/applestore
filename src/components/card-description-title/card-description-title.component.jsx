import React from "react";
import "./card-description-title.styles.css";

const CardDescriptionTitle = ({ description, subtype }) => (
  <h4 data-test="card-description-title-container" className="card-description-title-container">
    <p data-test="card-description-title" className="card-description-title">{description}</p>
    <strong data-test="card-description-subtype" className={`colorDefault ${subtype}`}>{subtype}</strong>
  </h4>
);

export default CardDescriptionTitle;
