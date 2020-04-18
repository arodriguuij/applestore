import React from "react";
import { Link } from "react-router-dom";
import "./buy-button.styles.css";

const BuyButton = ({ collection, id, text }) => (
  <Link to={`/${collection}/${id}`} className="buy-button">
    {text}
  </Link>
);

export default React.memo(BuyButton);
