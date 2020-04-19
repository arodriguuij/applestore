import React from "react";
import "./breadcrumb.styles.css";

const Breadcrumb = ({ breadcrumb }) => (
  <div className="breadcrumb">
    <h1 className="breadcrumb-h1">{breadcrumb}</h1>
  </div>
);

export default Breadcrumb;
