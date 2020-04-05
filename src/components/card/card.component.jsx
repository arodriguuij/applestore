import React from "react";
import { Link } from "react-router-dom";
import "./card.styles.css";

const Card = ({ id, classes, collection, click, img }) => {
  return (
    <div className={classes}>
      {click ? (
        <Link to={`/${collection}/${id}`}>
          <img alt={id} src={img} />
        </Link>
      ) : (
        <img alt={id} src={img} />
      )}
    </div>
  );
};

export default Card;
