import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import { selectorCollectionByKeyAndNestedKey } from "../../redux/collections/collections.selectors";
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

const mapStateToProps = (state, ownProps) => ({
  types: selectorCollectionByKeyAndNestedKey(
    `collection_${ownProps.collection}`,
    "types"
  )(state),
  subtypes: selectorCollectionByKeyAndNestedKey(
    `collection_${ownProps.collection}`,
    "subtypes"
  )(state),
});

export default connect(mapStateToProps)(CategoryButton);
