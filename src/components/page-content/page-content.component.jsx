import React from "react";
import "./page-content.styles.css";
import Breadcrumb from "../breadcrumb/breadcrumb.component";

const PageContent = ({ classesContainer, text, classesMain, children }) => {
  return (
    <div className={classesContainer}>
      <Breadcrumb text={text} />
      <div className={classesMain}>{children}</div>
    </div>
  );
};

export default PageContent;
