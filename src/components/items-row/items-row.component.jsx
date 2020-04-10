import React from "react";
import Card from "../card/card.component";
import { connect } from "react-redux";
import {
  selectorItemsRowBody,
  selectorItemsRowTitle,
} from "../../redux/devicesMainPage/devices.selectors";
import "./items-row.styles.css";

const RowItems = ({ itemsRowBody, itemsRowTitle }) => {
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
  itemsRowBody: selectorItemsRowBody(state),
  itemsRowTitle: selectorItemsRowTitle(state),
});

export default connect(mapStateToProps)(RowItems);
