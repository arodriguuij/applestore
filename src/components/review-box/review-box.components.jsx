import React, { Fragment } from "react";
import ReviewCard from "../review-card/review-card.component";
import ItemImages from "../item-image/item-image.component";
import "./review-box.styles.css";

const Review = ({ id, collection, img, device, addItem }) => {
  return (
    <Fragment>
      <div className="review-box-header">
        <h1 className="review-box-header-h1">Review what you have selected</h1>
      </div>
      <div className="review-box-content">
        <ItemImages id={id} collection={collection} img={img} hidden />
        <div className="review-box-content-description">
          <ReviewCard device={device} addItem={addItem} img={img} id={id}/>
        </div>
      </div>
    </Fragment>
  );
};
export default Review;
