import { connect } from "react-redux";
import { selectorTotalPrice } from "../../redux/checkout/checkout.selectors";
import CheckoutTotalPrice from "../../components/checkout-total-price/checkout-total-price.component";

const mapStateToProps = (state) => ({
  totalPrice: selectorTotalPrice(state),
});

export default connect(mapStateToProps)(CheckoutTotalPrice);
