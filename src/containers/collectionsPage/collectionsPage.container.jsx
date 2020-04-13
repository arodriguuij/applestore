import React, { useEffect, useState, lazy, Fragment } from "react";
import "./collectionsPage.styles.css";
import { connect } from "react-redux";
import {
  selectorCollectionAndX,
  selectorCollectionError,
} from "../../redux/collections/collections.selectors";
import Card from "../../components/card/card.components";
import { fetchCollectionAsyn } from "../../redux/collections/collections.actions";
import { setBreadcrumb } from "../../redux/breadcrumb/breadcrumb.actions";
import CategoryButtons from "../../components/category-buttons/category-buttons.component";
import Breadcrumb from "../../components/breadcrumb/breadcrumb.component";

const ErrorPage = lazy(() => import("../../components/error-page/error-page"));

const CollectionPage = (props) => {
  const {
    onFetchCollectionAsyn,
    onSetBreadcrumb,
    path,
    error,
  } = props;
  const collectionName = path.substr(1);
  const collectionStateName = props[`collection_${collectionName}`];

  const [type, setType] = useState("all");
  const [subtype, setSubtype] = useState("all");

  useEffect(() => {
    if (
      Object.keys(collectionStateName).length === 0 &&
      collectionStateName.constructor === Object
    )
      return onFetchCollectionAsyn(collectionName);
  }, [onFetchCollectionAsyn, collectionName, collectionStateName]);

  useEffect(() => {
    onSetBreadcrumb(collectionName);
  }, [onSetBreadcrumb, collectionName]);

  const clickTypeHandler = (type) => {
    setType(type);
  };
  const clickSubtypeHandler = (subtype) => {
    setSubtype(subtype);
  };

  let content = (
      <Fragment>
        <Breadcrumb />
        <div className="item-collection-page">
          <CategoryButtons
            actualType={type}
            actualSubtype={subtype}
            actionTypes={(type) => clickTypeHandler(type)}
            actionSubtypes={(subtype) =>
              clickSubtypeHandler(subtype)
            }
            collection={collectionName}
          />
          <div className="collection-page-items">
            {Object.entries(collectionStateName)
              .filter(
                ([id, device]) => device.type === type || type === "all"
              )
              .filter(
                ([id, device]) => device.subtype === subtype || subtype === "all"
              )
              .map(([id, device]) => (
                <Card
                  key={id}
                  id={id}
                  collection={collectionName}
                  {...device}
                />
              ))}
          </div>
        </div>
      </Fragment>
    );

  if (error) content = <ErrorPage text="Something was wrong... Try again :|" />;

  return content;
};

const mapStateToProps = (state) => ({
  collection_Mac: selectorCollectionAndX('collection_Mac', 'items')(state),
  collection_iPhone: selectorCollectionAndX('collection_iPhone', 'items')(state),
  collection_iPad: selectorCollectionAndX('collection_iPad', 'items')(state),
  collection_iWatch: selectorCollectionAndX('collection_iWatch', 'items')(state),
  collection_Accessories: selectorCollectionAndX('collection_Accessories', 'items')(state),
  error: selectorCollectionError(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFetchCollectionAsyn: (collectionName) =>
    dispatch(fetchCollectionAsyn(collectionName)),
  onSetBreadcrumb: (text) => dispatch(setBreadcrumb(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage);
