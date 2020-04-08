import React from "react";
import BannerDescription from '../banner-description/banner-description.component';
import BannerDescriptionExtra from '../banner-description-extra/banner-description-extra.component';
import "./item-description.styles.css";

const ItemDescription = ({ id, description, price, subtype }) => {
  return (
    <div className="item-description">
      <BannerDescription description={description} subtype={subtype}/>
      <BannerDescriptionExtra price={price} id={id}/>
    </div>
  );
};


export default ItemDescription;
