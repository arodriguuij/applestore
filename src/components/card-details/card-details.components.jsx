import React, { Fragment } from "react";
import DetailsCard from "../details-card/details-card.component";
import Card from "../card/card.component";
import "./card-details.styles.css";

const CardDetails = ({ id, collection, img, clickable, device, addItem }) => {
  return (
    <Fragment>
      <div className="card-details-header">
        <h1>Review what you have selected</h1>
      </div>
      <div className="card-details-content">
        <Card id={id} collection={collection} img={img} clickable={clickable} hidden="hidden" />
        <div className="card-details-content-description">
          <DetailsCard device={device} addItem={addItem} img={img} id={id}/>
        </div>
      </div>
    </Fragment>
  );
};
export default CardDetails;
