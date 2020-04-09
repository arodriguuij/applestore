import React from "react";
import "./details-card.styles.css";
import CardItemDetailsDescription from "../card-item-details-description/card-item-details-description.component";
import CustomButton from "../custom-button/custom-button.component";
import { Link } from "react-router-dom";

const DetailsCard = ({ device, addItem, img, id }) => {
  const { name, description, price } = device;
  return (
    <div className="collection-page-description">
      <CardItemDetailsDescription
        name={name}
        description={description}
        price={price}
        img={img}
        id={id}
      />
      <div className="collection-page-description-button">
        <CustomButton action={addItem} google>
          Add Item
        </CustomButton>
        <Link to="/bag">
          <CustomButton checkout>Checkout</CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default DetailsCard;
