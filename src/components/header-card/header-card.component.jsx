import React from "react";
import BuyButton from "../buy-button/buy-button.component";
import "./header-card.styles.css";

const HeaderCard = ({ name, collection, id, extra }) => {
  return (
    <div className="card-grid-content-top">
      <p className="card-grid-content-top-name">{name}</p>
      <div className="item-description-extra">{extra}</div>
      <BuyButton collection={collection} id={id} />
    </div>
  );
};

export default HeaderCard;
