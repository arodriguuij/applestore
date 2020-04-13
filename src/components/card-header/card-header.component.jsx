import React from "react";
import BuyButton from "../buy-button/buy-button.component";
import "./card-header.styles.css";

const CardHeader = ({ name, collection, id, extra, text }) => {
  return (
    <div className="card-header-container">
      <p className="card-header-name">{name}</p>
      <div className="card-header-extra">{extra}</div>
      <BuyButton collection={collection} id={id} text={text}/>
    </div>
  );
};

export default CardHeader;
