import React from "react";
import { Link } from "react-router-dom";
import BuyButton from "../buy-button/buy-button.component";
import "./card-header.styles.css";

const CardHeader = ({ name, collection, id, extra, text }) => (
  <div className="card-header-container">
    <p className="card-header-name">{name}</p>
    <div className="card-header-extra">{extra}</div>
    <Link to={`/${collection}/${id}`}>
      <BuyButton text={text} />
    </Link>
  </div>
);

export default CardHeader;
