import React from "react";
import "./checkout-item.styles.css";

const CheckoutItem = ({ item, incrementItem, decrementItem, removeItem }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={item.img} alt="item" />
      </div>
      <span className="name">{item.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decrementItem(item.id)}>
          &#10094;
        </div>
        <div className="value">{item.quantity}</div>
        <div className="arrow" onClick={() => incrementItem(item.id)}>
          &#10095;
        </div>
      </span>
      <span className="price">{item.price}</span>
      <div className="remove-button" onClick={() => removeItem(item.id)}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
