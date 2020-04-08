import React, { Fragment } from "react";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import {
  selectorTypesX,
  selectorSubtypesX,
} from "../../redux/collections/collections.selectors";
import "./category-buttons.styles.css";

const CategoryButtons = ({ action, actual, types, subtypes }) => {
  return (
    <Fragment>
      <div className="category-buttons-types">
        <CustomButton
          classes={actual === "all" && true}
          inverted
          action={() => action("all")}
        >
          All of them
        </CustomButton>
        {types.map((type, id) => (
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
{/*       {subtypes && (
        <div className="category-buttons-types">
          <CustomButton
            classes={actual === "all" && true}
            inverted
            action={() => action("all")}
          >
            All of them
          </CustomButton>
          {subtypes.map((subtype, id) => (
            <CustomButton
              key={id}
              classes={actual === "all" && true}
              inverted
              action={() => action(subtype)}
            >
              {subtype}
            </CustomButton>
          ))}
        </div>
      )} */}
    </Fragment>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    types: selectorTypesX(`collection_${ownProps.collection}`)(state),
    subtypes: selectorSubtypesX(`collection_${ownProps.collection}`)(state),
  };
};
export default connect(mapStateToProps)(CategoryButtons);
