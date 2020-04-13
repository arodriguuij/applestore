import React from "react";
import ItemImages from "../item-image/item-image.component";
import { connect } from "react-redux";
import {
  selectorXtitle,
  selectorXbody,
} from "../../redux/homePageCollections/homePageCollections.selectors";
import "./items-row.styles.css";

const ItemsRow = ({ itemsRowBody, itemsRowTitle }) => {
  return (
    <div className="items-row-container">
      <h1 className="items-row-title">{itemsRowTitle}</h1>
      <div className="items-row-content">
        {itemsRowBody.map((device, index) => (
          <ItemImages key={index} {...device} clickable />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  itemsRowBody: selectorXbody("itemsRow")(state),
  itemsRowTitle: selectorXtitle("itemsRow")(state),
});

export default connect(mapStateToProps)(ItemsRow);
