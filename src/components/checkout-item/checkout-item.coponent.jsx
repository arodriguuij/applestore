import React from "react";
import { Link } from "react-router-dom";
import {
  incrementItem,
  decrementItem,
  removeItem,
} from "../../redux/checkout/checkout.actions";
import { connect } from "react-redux";
import "./checkout-item.styles.css";

const CheckoutItem = ({ item, onDecrementItem, onIncrementItem, onRemoveItem }) => {
  return (
    <div className="checkout-item">
      <div className="checkout-item-img-container">
        <Link to={`/${item.collection}/${item.id}`}>
          <img src={item.img} alt="item" className="checkout-item-img"/>
        </Link>
      </div>
      <span className="checkout-item-name">{item.name}</span>
      <span className="checkout-item-quantity">
        <div
          className="checkout-item-arrow"
          onClick={() => onDecrementItem(item.id)}
        >
          &#10094;
        </div>
        <div className="checkout-item-value">{item.quantity}</div>
        <div
          className="checkout-item-arrow"
          onClick={() => onIncrementItem(item.id)}
        >
          &#10095;
        </div>
      </span>
      <span className="checkout-item-price">{item.price}€</span>
      <div
        className="checkout-item-remove-button"
        onClick={() => onRemoveItem(item.id)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onIncrementItem: (id) => dispatch(incrementItem(id)),
  onRemoveItem: (id) => dispatch(removeItem(id)),
  onDecrementItem: (id) => dispatch(decrementItem(id)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
