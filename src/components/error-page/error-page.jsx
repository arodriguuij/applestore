import React from "react";
import "./error-page.css";

const ErrorPage = () => {
  return (
    <div className={"error-image-overlay"}>
      <div className={"error-image-container"} />
      <h2 className={"error-image-text"}>This Page is Lost in Space</h2>
    </div>
  );
};

export default ErrorPage;
