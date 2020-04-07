import React from "react";
import { Link } from "react-router-dom";
import ItemImg from "../item-img/item-img.component";
import ItemDescription from "../item-description/item-description.component";
import "./card-grid.styles.css";

const CardGrid = ({ collection, id, img, name, extra, special, price }) => {
  return (
    <div className={`card-grid ${special ? 'card-grid-special-top-right' : ''}`}>
      <Link to={`/${collection}/${id}`}>
        <div className="card-grid-content">
          <ItemImg img={img} />
          <ItemDescription id={id} name={name} price={price} extra={extra} />
        </div>
      </Link>
    </div>
  );
};

export default CardGrid;
