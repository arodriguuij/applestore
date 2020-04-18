import React from "react";
import ReviewCardDescription from "../review-card-description/review-card-description.component";
import CustomButton from "../custom-button/custom-button.component";
import { Link } from "react-router-dom";
import "./review-card.styles.css";

const ReviewCard = ({ name, price, addItem, img, id }) => (
  <div className="review-card-container">
    <ReviewCardDescription name={name} price={price} img={img} id={id} />
    <div className="review-card-container-button">
      <CustomButton action={addItem} google>
        Add Item
      </CustomButton>
      <Link to="/checkout">
        <CustomButton checkout>Checkout</CustomButton>
      </Link>
    </div>
  </div>
);

export default ReviewCard;
