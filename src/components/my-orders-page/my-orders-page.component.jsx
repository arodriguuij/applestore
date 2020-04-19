import React, { Fragment } from "react";
import BreadcrumbContainer from "../../containers/breadcrumb/breadcrumb.container";
import MyOrdersTable from "../my-orders-table/my-orders-table.components";
import Spinner from "../../components/spinner/spinner.component";
import ErrorPage from "../../components/error-page/error-page.component";
import "./my-orders-page.styles.css";

const MyOrdersPage = ({ myOrdersCollection, loading, error }) => {
  const getContent = () => {
    if (loading) return <Spinner />;
    else if (error)
      return (
        <ErrorPage
          text={
            "An error has occurred during the order fetch process. Try again"
          }
        />
      );
    else
      return (
        <Fragment>
          <BreadcrumbContainer />
          <div className="my-orders-container">
            {Object.entries(myOrdersCollection).map(([id, order]) => (
              <MyOrdersTable key={id} order={order} />
            ))}
          </div>
        </Fragment>
      );
  };

  return getContent();
};

export default MyOrdersPage;
