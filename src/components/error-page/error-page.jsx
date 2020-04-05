import React from "react";
import "./error-page.css";

const ErrorPage = ({text}) => {
  return (
    <div className={"error-image-overlay"}>
      <div className={"error-image-container"} />
      <h2 className={"error-image-text"}>{text}</h2>
    </div>
  );
};

export default ErrorPage;
