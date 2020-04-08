import React from "react";
import BannerDescriptionNumItems from "../banner-description-numItems/banner-description-numItems.component";
import BannerDescriptionPrice from "../banner-description-price/banner-description-price.component";
import "./banner-description-extra.styles.css";

const BannerDescriptionExtra = ({ price, id }) => {
  return (
    <div className="item-description-price-numItems">
      <BannerDescriptionPrice price={price} />
      <BannerDescriptionNumItems id={id}/>
    </div>
  );
};

export default BannerDescriptionExtra;
