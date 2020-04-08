import React from "react";
import Card from "../card/card.component";
import { connect } from "react-redux";
import { selectorItemsRowBody } from "../../redux/devicesMainPage/devices.selectors";
import "./items-row.styles.css";

const RowItems = ({ itemsRowBody }) => {
  return (
    <div className={"home-page-top"}>
      {itemsRowBody.map((device, index) => (
          <Card key={index} {...device} clickable />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  itemsRowBody: selectorItemsRowBody(state), 
});

export default connect(mapStateToProps)(RowItems);
