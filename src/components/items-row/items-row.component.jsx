import React from "react";
import Card from "../card/card.component";
import { connect } from "react-redux";
import {
  selectorXtitle,
  selectorXbody,
} from "../../redux/homePageCollections/homePageCollections.selectors";
import "./items-row.styles.css";

const ItemsRow = ({ itemsRowBody, itemsRowTitle }) => {
  return (
    <div className="home-page-top">
      <h1 className="home-page-top-title">{itemsRowTitle}</h1>
      <div className="home-page-top-content">
        {itemsRowBody.map((device, index) => (
          <Card key={index} {...device} clickable />
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
