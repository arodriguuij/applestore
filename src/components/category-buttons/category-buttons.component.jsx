import React, { Fragment } from "react";
import CategoryButton from "../category-button/category-button-component";
import "./category-buttons.styles.css";

const CategoryButtons = ({ actionTypes, actionSubtypes, actualType, actualSubtype, collection }) => {
  return (
    <Fragment>
      <CategoryButton
        collection={collection}
        action={actionTypes}
        actual={actualType}
        typeButton={'types'}
      />
      <CategoryButton
        collection={collection}
        action={actionSubtypes}
        actual={actualSubtype}
        typeButton={'subtypes'}
      />
    </Fragment>
  );
};

export default CategoryButtons;
