import React from "react";
import { Link } from "react-router-dom";
import "./card.styles.css";

const Card = ({ id, collection, img, clickable}) => {
  return (
    <div className='home-page-product'>
      {clickable ? (
        <Link to={`/${collection}/${id}`}>
          <img alt={'device'} src={img} />
        </Link>
      ) : (
        <img alt={'device'} src={img} />
      )}
    </div>
  );
};

export default Card;
