import React from "react";
import { Link } from "react-router-dom";

const Cart = ({id, name, img, collection}) => {
  return (
    <div>
      <Link to={`/${collection}/${id}`}>
        <img alt={name} src={img} className="home-page-product" />
      </Link>
    </div>
  );
};

export default Cart;
