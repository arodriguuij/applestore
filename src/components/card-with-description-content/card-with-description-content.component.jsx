import React, { Fragment } from "react";
import { connect } from "react-redux";
import { selectNumItemsOfDevice } from "../../redux/bag/bag.selectors";

const CardWithDescriptionContent = ({
  descriptionExtra,
  description,
  type,
  price,
  id,
  numItemsOfDevice,
}) => {
  let content;
  switch (type) {
    case "collection":
      content = <li>{description}</li>;
      break;
    case "details":
      content = (
        <Fragment>
          <h3>Description</h3>
          {descriptionExtra.split("$").map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </Fragment>
      );
      break;
    default:
      content = null;
      break;
  }

  return (
    <ul>
      {content}
      <h3>Price</h3>
      <li>
        From $<strong>{price}</strong>
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
