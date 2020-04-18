import React from "react";
import "./error-page.styles.css";

const ErrorPage = ({ text }) => (
  <div className={"error-image-overlay"}>
    <div className={"error-image-container"} />
    <h2 className={"error-image-text"}>{text}</h2>
  </div>
);

export default ErrorPage;
