import React, { Fragment } from "react";
import ReviewCard from "../review-card/review-card.component";
import ItemImages from "../item-image/item-image.component";
import ReviewTitle from '../review-title/review-title.component';
import "./review-box.styles.css";

const Review = ({ price, name, id, collection, img, addItem }) => (
  <Fragment>
    <ReviewTitle text="Review what you have selected"/>
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
