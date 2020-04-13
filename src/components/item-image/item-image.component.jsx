import React from "react";
import { Link } from "react-router-dom";
import "./item-image.styles.css";

const ItemImages = ({ id, collection, img, clickable, hidden, bigger}) => {
  return (
    <div className={`home-page-product ${hidden ? 'hidden' : ''} ${bigger ? bigger : ''}`}>
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

export default ItemImages;
