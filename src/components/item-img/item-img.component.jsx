import React from "react";
import "./item-img.styles.css";

const ItemImg = ({img }) => {
  return (
    <div className="item-img">
      <img alt={"device"} src={img} />
    </div>
  );
};

export default ItemImg;
