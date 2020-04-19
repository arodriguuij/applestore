import {
  incrementItem,
  decrementItem,
  removeItem,
} from "../../redux/checkout/checkout.actions";
import { connect } from "react-redux";
import CheckoutItem from '../../components/checkout-item/checkout-item.coponent';

const mapDispatchToProps = (dispatch) => ({
  onIncrementItem: (id) => dispatch(incrementItem(id)),
  onRemoveItem: (id) => dispatch(removeItem(id)),
  onDecrementItem: (id) => dispatch(decrementItem(id)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
