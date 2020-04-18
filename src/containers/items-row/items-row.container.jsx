import React from "react";
import ItemImages from "../../components/item-image/item-image.component";
import { connect } from "react-redux";
import { selectorPageCollectionByKeyAndNedtedKey } from "../../redux/homePageCollections/home-page-collections.selectors";
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

const mapStateToProps = (state) => ({
  itemsRowBody: selectorPageCollectionByKeyAndNedtedKey(
    "itemsRow",
    "body"
  )(state),
  itemsRowTitle: selectorPageCollectionByKeyAndNedtedKey(
    "itemsRow",
    "title"
  )(state),
});

export default connect(mapStateToProps)(ItemsRow);
