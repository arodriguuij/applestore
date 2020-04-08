import React from "react";
import { Link } from "react-router-dom";
import ItemImg from "../item-img/item-img.component";
import ItemDescription from "../item-description/item-description.component";
import "./card-grid.styles.css";

const CardGrid = ({ collection, id, img, name, extra, description, price, subtype, special }) => {
  let classes = [];
  collection === "accessories"
    ? classes.push("card-grid-dark")
    : classes.push("card-grid-light");
  special && classes.push(' card-grid-special-top-right');

  return (
    <div className={classes}>
      <div className="card-grid-content">
        <div className="card-grid-content-top">
          <p className="card-grid-content-top-name">{name}</p>
          <Link to={`/${collection}/${id}`}>
            <button className="buy">Buy</button>
          </Link>
        </div>
        <ItemImg img={img} />
        <ItemDescription
          id={id}
          description={description}
          price={price}
          extra={extra}
          subtype={subtype}
        />
      </div>
    </div>
  );
};

export default CardGrid;
