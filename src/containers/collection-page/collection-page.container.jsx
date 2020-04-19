import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CollectionPage from "../../components/collection-page/collection-page.component";
import {
  selectorCollectionByKeyAndNestedKey,
  selectorCollectionByKey,
} from "../../redux/collections/collections.selectors";
import { fetchCollectionStart } from "../../redux/collections/collections.actions";
import { setBreadcrumb } from "../../redux/breadcrumb/breadcrumb.actions";

const CollectionPageContainer = (props) => {
  const {
    onFetchCollectionStart,
    onSetBreadcrumb,
    collection,
    error,
    loading,
  } = props;
  const collectionStateName = props[`collection_${collection}`];

  const [type, setType] = useState("all");
  const [subtype, setSubtype] = useState("all");

  const clickTypeHandler = (type) => {
    setType(type);
  };
  const clickSubtypeHandler = (subtype) => {
    setSubtype(subtype);
  };

  useEffect(() => {
    setType("all");
    setSubtype("all");
  }, [collection]);

  useEffect(() => {
    if (
      Object.keys(collectionStateName).length === 0 &&
      collectionStateName.constructor === Object
    )
      onFetchCollectionStart(collection);
  }, [onFetchCollectionStart, collection, collectionStateName]);

  useEffect(() => {
    onSetBreadcrumb(collection);
  }, [onSetBreadcrumb, collection]);

  return (
    <CollectionPage
      collection={collection}
      collectionStateName={collectionStateName}
      error={error}
      loading={loading}
      type={type}
      subtype={subtype}
      clickTypeHandler={clickTypeHandler}
      clickSubtypeHandler={clickSubtypeHandler}
    />
  );
};

const mapStateToProps = (state) => ({
  collection_Mac: selectorCollectionByKeyAndNestedKey(
    "collection_Mac",
    "items"
  )(state),
  collection_iPhone: selectorCollectionByKeyAndNestedKey(
    "collection_iPhone",
    "items"
  )(state),
  collection_iPad: selectorCollectionByKeyAndNestedKey(
    "collection_iPad",
    "items"
  )(state),
  collection_iWatch: selectorCollectionByKeyAndNestedKey(
    "collection_iWatch",
    "items"
  )(state),
  collection_Accessories: selectorCollectionByKeyAndNestedKey(
    "collection_Accessories",
    "items"
  )(state),
  error: selectorCollectionByKey("error")(state),
  loading: selectorCollectionByKey("loading")(state),
});
const mapDispatchToProps = (dispatch) => ({
  onFetchCollectionStart: (collectionName) =>
    dispatch(fetchCollectionStart(collectionName)),
  onSetBreadcrumb: (text) => dispatch(setBreadcrumb(text)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionPageContainer);
