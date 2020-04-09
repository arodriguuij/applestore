import React from "react";
import { textBreadcrumSelector } from "../../redux/breadcrumb/breadcrumb.selector";
import { connect } from "react-redux";
import "./breadcrumb.styles.css";

const Breadcrumb = ({ breadcrumb }) => {
  return <div className="collection-page-breadcrumb"><h1>{breadcrumb}</h1></div>;
};

const mapStateToProps = (state) => ({
  breadcrumb: textBreadcrumSelector(state),
});

export default connect(mapStateToProps)(Breadcrumb);
