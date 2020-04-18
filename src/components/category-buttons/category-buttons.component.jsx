import React, { Fragment } from "react";
import CategoryButton from "../category-button/category-button-component";

const CategoryButtons = ({
  actionTypes,
  actionSubtypes,
  actualType,
  actualSubtype,
  collection,
}) => (
  <Fragment>
    <CategoryButton
      collection={collection}
      action={actionTypes}
      actual={actualType}
      typeButton={"types"}
    />
    <CategoryButton
      collection={collection}
      action={actionSubtypes}
      actual={actualSubtype}
      typeButton={"subtypes"}
    />
  </Fragment>
);

export default CategoryButtons;
