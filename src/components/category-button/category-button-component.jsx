import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./category-button-styles.css";

const CategoryButton = (props) => {
  const { actual, action, typeButton } = props;
  return (
    <div className="category-buttons-types">
      <CustomButton
        classes={actual === "all" && true}
        inverted
        action={() => action("all")}
      >
        All of them
      </CustomButton>
      {props[typeButton].map((type, id) => (
        <CustomButton
          key={id}
          classes={actual === type && true}
          inverted
          action={() => action(type)}
        >
          {type}
        </CustomButton>
      ))}
    </div>
  );
};

export default CategoryButton;
