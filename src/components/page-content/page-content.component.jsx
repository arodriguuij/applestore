import React, { Fragment } from "react";
import "./page-content.styles.css";
import Breadcrumb from "../breadcrumb/breadcrumb.component";

const PageContent = (props) => {
  return (
    <Fragment>
      <Breadcrumb/>
      {props.children}
    </Fragment>
  );
};

export default PageContent;
