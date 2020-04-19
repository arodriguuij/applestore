import React, { Fragment } from "react";
import CategoryButtonContainer from "../../containers/category-button/category-button.container";

const CategoryButtons = ({
  actionTypes,
  actionSubtypes,
  actualType,
  actualSubtype,
  collection,
}) => (
  <Fragment>
    <CategoryButtonContainer
      collection={collection}
      action={actionTypes}
      actual={actualType}
      typeButton={"types"}
    />
    <CategoryButtonContainer
      collection={collection}
      action={actionSubtypes}
      actual={actualSubtype}
      typeButton={"subtypes"}
    />
  </Fragment>
);

export default CategoryButtons;
