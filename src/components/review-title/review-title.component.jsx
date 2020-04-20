import React from "react";
import "./review.title.styles.css";

const ReviewTitle = ({ text }) => (
  <div className="review-box-header">
    <h1 className="review-box-header-h1">{text}</h1>
  </div>
);

export default ReviewTitle;
