import React from "react";
import "./main-image.styles.css";

const MainImage = ({ img, text1, text2 }) => {
  return (
    <div className="main-image">
      <img className="main-image-img" alt="device" src={img} />
      <div>
        <h1 className="main-image-text-item">{text1}</h1>
        <h1 className="main-image-text-item">{text2}</h1>
      </div>
    </div>
  );
};

export default MainImage;
