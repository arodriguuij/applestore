import React, { Fragment } from "react";
import Card from "../card/card.components";
import CategoryButtons from "../category-buttons/category-buttons.component";
import Breadcrumb from "../breadcrumb/breadcrumb.component";
import "./collection-page.styles.css";

const CollectionPage = ({
  actualType,
  actualSubtype,
  actionTypes,
  actionSubtypes,
  collection,
  collectionStateName,
}) => {
  let content = (
    <Fragment>
      <Breadcrumb />
      <div className="item-collection-page">
        <CategoryButtons
          actualType={actualType}
          actualSubtype={actualSubtype}
          actionTypes={actionTypes}
          actionSubtypes={actionSubtypes}
          collection={collection}
        />
        <div className="collection-page-items">
          {Object.entries(collectionStateName)
            .filter(
              ([id, device]) =>
                device.type === actualType || actualType === "all"
            )
            .filter(
              ([id, device]) =>
                device.subtype === actualSubtype || actualSubtype === "all"
            )
            .map(([id, device]) => (
              <Card key={id} id={id} collection={collection} {...device} />
            ))}
        </div>
      </div>
    </Fragment>
  );
  return content;
};

export default CollectionPage;
