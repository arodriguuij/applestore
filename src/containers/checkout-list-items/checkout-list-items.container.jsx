import { selectorCheckout } from "../../redux/checkout/checkout.selectors";
import { connect } from "react-redux";
import CheckoutListItems from "../../components/checkout-list-items/checkout-list-items.container";

const mapStateToProps = (state) => ({
  checkout: selectorCheckout(state),
});

export default connect(mapStateToProps)(CheckoutListItems);
