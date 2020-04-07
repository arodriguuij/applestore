import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import './category-buttons.styles.css';

const CategoryButtons = ({ action, actual }) => {
  return (
    <div className="category-buttons">
      <CustomButton classes={actual==="Headphones" && true} inverted action={() => action("Headphones")}>
        Headphones
      </CustomButton>
      <CustomButton classes={actual==="all" && true} inverted action={() => action("all")}>
        All of them
      </CustomButton>
      <CustomButton classes={actual==="Earphones" && true} inverted action={() => action("Earphones")}>
        Earphones
      </CustomButton>
    </div>
  );
};

export default CategoryButtons;
