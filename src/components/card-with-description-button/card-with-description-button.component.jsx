import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component";
import "./card-with-description-button-styles.css";

const CardWithDescriptionButton = ({
  id,
  collection,
  addItem,
  removeItem,
  type,
  quantity,
  decrementItem,
  incrementItem,
}) => {
  let content;
  switch (type) {
    case "collection":
      content = (
        <Link to={`/${collection}/${id}`}>
          <CustomButton>More details</CustomButton>
        </Link>
      );
      break;
    case "details":
      content = <CustomButton action={addItem}>Add Item</CustomButton>;
      break;
    case "bag":
      content = (
        <span className="quantity">
          <div className="arrow" onClick={() => decrementItem(id)}>
            &#10094;
          </div>
          <div className="value">{quantity}</div>
          <div className="arrow" onClick={() => incrementItem(id)}>
            &#10095;
          </div>
          <div onClick={() => removeItem(id)} className="remove-button">
            &#10005;
          </div>
        </span>
      );
      break;
    default:
      content = <h2>boooooooooooooooooooooooooooooooooom</h2>;
      break;
  }

  return content;
};
export default CardWithDescriptionButton;
