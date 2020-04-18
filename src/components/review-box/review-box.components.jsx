import React, { Fragment } from "react";
import ReviewCard from "../review-card/review-card.component";
import ItemImages from "../item-image/item-image.component";
import "./review-box.styles.css";

const Review = ({ price, name, id, collection, img, addItem }) => (
  <Fragment>
    <div className="review-box-header">
      <h1 className="review-box-header-h1">Review what you have selected</h1>
    </div>
    <div className="review-box-content">
      <ItemImages id={id} collection={collection} img={img} hidden />
      <div className="review-box-content-description">
        <ReviewCard
          price={price}
          addItem={addItem}
          img={img}
          id={id}
          name={name}
        />
      </div>
    </div>
  </Fragment>
);

export default Review;
