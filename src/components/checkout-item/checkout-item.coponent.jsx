import React from "react";
import CheckoutItemIncrement from "../checkout-item-increment/checkout-item-increment.component";
import CheckoutItemDecrement from "../checkout-item-decrement/checkout-item-decrement.component";
import CheckoutItemRemove from "../checkout-item-remove/checkout-item-remove.component";
import CheckoutItemImage from "../checkout-item-image/checkout-item-image.component";
import "./checkout-item.styles.css";

const CheckoutItem = ({
  id,
  img,
  collection,
  name,
  quantity,
  price,
  onDecrementItem,
  onIncrementItem,
  onRemoveItem,
  fullInformation,
}) => (
  <div className="checkout-item">
    <CheckoutItemImage
      collection={collection}
      id={id}
      img={img}
      fullInformation={fullInformation}
    />
    <span className="checkout-item-name">{name}</span>
    <span className="checkout-item-quantity">
      {fullInformation ? (
        <CheckoutItemDecrement onDecrementItem={onDecrementItem} id={id} />
      ) : null}
      <div className="checkout-item-value">{quantity}</div>
      {fullInformation ? (
        <CheckoutItemIncrement onIncrementItem={onIncrementItem} id={id} />
      ) : null}
    </span>
    <span className="checkout-item-price">{price}€</span>
    {fullInformation ? (
      <CheckoutItemRemove onRemoveItem={onRemoveItem} id={id} />
    ) : null}
  </div>
);

export default CheckoutItem;
