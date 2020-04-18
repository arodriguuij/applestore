import React, { Fragment } from "react";
import BreadCrumb from "../breadcrumb/breadcrumb.component";
import MyOrdersTable from "../my-orders-table/my-orders-table.components";
import "./my-orders-page.styles.css";

const MyOrdersPage = ({ myOrdersCollection }) => {
  let content = (
    <div className="my-orders-container">
      {Object.entries(myOrdersCollection).map(([id, order]) => (
        <MyOrdersTable key={id} order={order} />
      ))}
    </div>
  );

  return (
    <Fragment>
      <BreadCrumb />
      {content}
    </Fragment>
  );
};

export default MyOrdersPage;
