import React from "react";
import { breadcrumbSelectorByKey } from "../../redux/breadcrumb/breadcrumb.selector";
import { connect } from "react-redux";
import "./breadcrumb.styles.css";

const Breadcrumb = ({ breadcrumb }) => (
  <div className="breadcrumb">
    <h1 className="breadcrumb-h1">{breadcrumb}</h1>
  </div>
);

const mapStateToProps = (state) => ({
  breadcrumb: breadcrumbSelectorByKey("text")(state),
});

export default connect(mapStateToProps)(Breadcrumb);
