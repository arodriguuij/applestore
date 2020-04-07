import React from "react";
import Card from "../../components/card/card.component";
import { connect } from "react-redux";
import { selectorTopDevices } from "../../redux/devicesMainPage/devices.selectors";
import "./top-devices.styles.css";

const TopDevices = ({ topDevices }) => {
  return (
    <div className={"home-page-top"}>
      {topDevices.map((device, index) => (
        <div key={index}>
          <Card {...device} clickable />
          <p>{device.name}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  topDevices: selectorTopDevices(state),
});

export default connect(mapStateToProps)(TopDevices);
