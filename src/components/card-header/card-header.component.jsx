import React from "react";
import { Link } from "react-router-dom";
import BuyButton from "../buy-button/buy-button.component";
import "./card-header.styles.css";

const CardHeader = ({ name, collection, id, extra, text }) => (
  <div data-test="card-header-container" className="card-header-container">
    <p data-test="card-header-name" className="card-header-name">
      {name}
    </p>
    <div data-test="card-header-extra" className="card-header-extra">
      {extra}
    </div>
    <Link to={`/${collection}/${id}`}>
      <BuyButton data-test="card-header-button" text={text} />
    </Link>
  </div>
);

export default CardHeader;
