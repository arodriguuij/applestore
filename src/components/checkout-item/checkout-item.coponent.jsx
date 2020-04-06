import React from "react";
import { Link } from "react-router-dom";
import "./checkout-item.styles.css";

const CheckoutItem = ({ item, incrementItem, decrementItem, removeItem }) => {
  return (
    <div className="checkout-item">
      <div className="checkout-item-img">
        <Link to={`/${item.collection}/${item.id}`}>
          <img src={item.img} alt="item" />
        </Link>
      </div>
      <span className="checkout-item-name">{item.name}</span>
      <span className="checkout-item-quantity">
        <div
          className="checkout-item-arrow"
          onClick={() => decrementItem(item.id)}
        >
          &#10094;
        </div>
        <div className="checkout-item-value">{item.quantity}</div>
        <div
          className="checkout-item-arrow"
          onClick={() => incrementItem(item.id)}
        >
          &#10095;
        </div>
      </span>
      <span className="checkout-item-price">{item.price}</span>
      <div
        className="checkout-item-remove-button"
        onClick={() => removeItem(item.id)}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
