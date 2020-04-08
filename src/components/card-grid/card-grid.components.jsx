import React from "react";
import ItemImg from "../item-img/item-img.component";
import ItemDescription from "../item-description/item-description.component";
import HeaderCard from '../header-card/header-card.component';
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
        <HeaderCard name={name} collection={collection} id={id} extra={extra}/>
        <ItemImg img={img} />
        <ItemDescription
          description={description}
          price={price}
          subtype={subtype}
          id={id}
        />
      </div>
    </div>
  );
};

export default CardGrid;
