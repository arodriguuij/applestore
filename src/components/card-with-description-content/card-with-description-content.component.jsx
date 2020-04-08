import React from "react";
import { connect } from "react-redux";
import { selectNumItemsOfDevice } from "../../redux/bag/bag.selectors";

const CardWithDescriptionContent = ({
  description,
  type,
  price,
  id,
  numItemsOfDevice,
}) => {
  let content = <li>{description}</li>;
  return (
    <ul>
      {content}
      <h3>Price</h3>
      <li>
        From <strong>{price}€</strong>
      </li>
      <h3>Quantity</h3>
      <li>
        <strong>{numItemsOfDevice}</strong>
      </li>
    </ul>
  );
};

const mapStateToProps = (state, ownProps) => ({
  numItemsOfDevice: selectNumItemsOfDevice(ownProps.id)(state),
});
export default connect(mapStateToProps)(CardWithDescriptionContent);
