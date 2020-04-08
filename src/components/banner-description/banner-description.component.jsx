import React from "react";
import "./banner-description.styles.css";

const BannerDescription = ({description, subtype}) => {
  return (
    <h4 className="item-description-text-description-and-subtype">
      <p>{description}</p>
      <strong className={`colorDefault ${subtype}`}>{subtype}</strong>
    </h4>
  );
};

export default BannerDescription;
