import React from "react";
import ItemImages from "../item-image/item-image.component";
import "./items-row.styles.css";

const ItemsRow = ({ itemsRowBody, itemsRowTitle }) => (
  <div className="items-row-container">
    <h1 className="items-row-title">{itemsRowTitle}</h1>
    <div className="items-row-content">
      {itemsRowBody.map((device, index) => (
        <ItemImages key={index} {...device} clickable />
      ))}
    </div>
  </div>
);

export default ItemsRow;
