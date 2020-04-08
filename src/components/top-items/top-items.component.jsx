import React from "react";
import Card from "../card/card.component";
import { connect } from "react-redux";
import { selectorTopItems } from "../../redux/devicesMainPage/devices.selectors";
import "./top-items.styles.css";

const TopItems = ({ topItems }) => {
  return (
    <div className={"home-page-top"}>
      {topItems.map((device, index) => (
        <div key={index}>
          <Card {...device} clickable />
          <p>{device.name}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
   topItems: selectorTopItems(state), 
});

export default connect(mapStateToProps)(TopItems);
