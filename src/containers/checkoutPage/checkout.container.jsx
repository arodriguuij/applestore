import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { selectorBag, selectorTotalPrice } from "../../redux/bag/bag.selectors";
import {
  incrementItem,
  decrementItem,
  removeItem,
} from "../../redux/bag/bag.actions";
import { setBreadcrumb } from "../../redux/breadcrumb/breadcrumb.actions";
import CheckoutItem from "../../components/checkout-item/checkout-item.coponent";
import Breadcrumb from "../../components/breadcrumb/breadcrumb.component";
import "./checkout.styles.css";

const BagPage = ({
  bag,
  totalPrice,
  onIncrementItem,
  onDecrementItem,
  onSetBreadcrumb,
  onRemoveItem,
}) => {
  const incrementItemHandler = (id) => onIncrementItem(id);
  const decrementItemHandler = (id) => onDecrementItem(id);
  const removeItemHandler = (id) => onRemoveItem(id);

  useEffect(() => {
    onSetBreadcrumb("Bag");
  }, [onSetBreadcrumb]);

  return (
    <Fragment>
      <Breadcrumb />
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="checkout-header-block">
            <span>Products</span>
          </div>
          <div className="checkout-header-block">
            <span>Description</span>
          </div>
          <div className="checkout-header-block">
            <span>Quantity</span>
          </div>
          <div className="checkout-header-block">
            <span>Price</span>
          </div>
          <div className="checkout-header-block">
            <span>Remove</span>
          </div>
        </div>
        {bag.map((item, index) => (
          <CheckoutItem
            key={index}
            item={item}
            incrementItem={incrementItemHandler}
            decrementItem={decrementItemHandler}
            removeItem={removeItemHandler}
          />
        ))}
        <div className="checkout-total">
          <span>TOTAL: {totalPrice}€</span>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  bag: selectorBag(state),
  totalPrice: selectorTotalPrice(state),
});
const mapDispatchToProps = (dispatch) => ({
  onSetBreadcrumb: (text) => dispatch(setBreadcrumb(text)),
  onIncrementItem: (id) => dispatch(incrementItem(id)),
  onRemoveItem: (id) => dispatch(removeItem(id)),
  onDecrementItem: (id) => dispatch(decrementItem(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(BagPage);
