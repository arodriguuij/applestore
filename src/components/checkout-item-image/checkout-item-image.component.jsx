import React from "react";
import { Link } from "react-router-dom";
import "./checkout-item-image.styles.css";

const CheckoutItemImage = ({collection, id, img, fullInformation}) => (
  <div className="checkout-item-img-container">
    <Link to={`/${collection}/${id}`}>
      <img
        src={img}
        alt="item"
        className={fullInformation ? "checkout-item-img" : "my-orders-item-img"}
      />
    </Link>
  </div>
);

export default CheckoutItemImage;