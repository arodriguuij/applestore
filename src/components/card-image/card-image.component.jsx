import React from "react";
import "./card-image.styles.css";

const CardImage = ({ img }) => (
  <div className="card-image">
    <img alt={"device"} src={img} />
  </div>
);

export default CardImage;
