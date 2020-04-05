import React from "react";
import { Link } from "react-router-dom";
import "./card.styles.css";

const Card = (props) => {
  return (
    <div className={` ${props.classes}`}>
      {props.click ? (
        <Link to={`/${props.collection}/${props.id}`}>
          <img alt={props.id} src={props.img} />
        </Link>
      ) : (
        <img alt={props.id} src={props.img} />
      )}
    </div>
  );
};

export default Card;
