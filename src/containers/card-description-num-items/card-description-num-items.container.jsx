import { selectNumItemsOfDevice } from "../../redux/checkout/checkout.selectors";
import { connect } from "react-redux";
import CardDescriptionNumItems from "../../components/card-description-num-items/card-description-num-items.component";

const mapStateToProps = (state, ownProps) => {
  return {
    numItemsOfDevice: selectNumItemsOfDevice(ownProps.id)(state),
  };
};

export default connect(mapStateToProps)(CardDescriptionNumItems);
