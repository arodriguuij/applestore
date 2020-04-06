import React from "react";
import {textBreadcrumSelector} from '../../redux/breadcrumb/breadcrumb.selector';
import {connect} from 'react-redux';
import './breadcrumb.styles.css';

const Breadcrumb = ({breadcrumb}) => {
return <h1 className="collection-page-breadcrumb">{breadcrumb}</h1>;
};

const mapStateToProps = state => ({
  breadcrumb: textBreadcrumSelector(state)
});

export default connect(mapStateToProps)(Breadcrumb);
