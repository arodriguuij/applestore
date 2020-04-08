import React, { useEffect, useState, lazy } from "react";
import "./accessoriesPage.styles.css";
import { connect } from "react-redux";
import {
  selectorItemsX,
  selectorCollectionLoading,
  selectorCollectionError,
} from "../../redux/collections/collections.selectors";
import CardGrid from "../../components/card-grid/card-grid.components";
import { fetchCollectionAsyn } from "../../redux/collections/collections.actions";
import { setBreadcrumb } from "../../redux/breadcrumb/breadcrumb.actions";
import CategoryButtons from "../../components/category-buttons/category-buttons.component";
import Spinner from "../../components/spinner/spinner.component";
const ErrorPage = lazy(() => import("../../components/error-page/error-page"));

const AccessoriesPage = (props) => {
  const {
    onFetchCollectionAsyn,
    onSetBreadcrumb,
    match,
    loading,
    error,
  } = props;
  const collectionName = match.path.substr(1);
  const collectionStateName = props[`collection_${collectionName}`];

  const [category, setCategory] = useState("all");

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

  const clickCategoryHandler = (category) => {
    setCategory(category);
  };

  let content = <Spinner />;
  if (!loading)
    content = (
      <div className="collection-page-content">
        <CategoryButtons
          actual={category}
          action={(category) => clickCategoryHandler(category)}
          collection={collectionName}
        />
        <div className="collection-page-items">
          {Object.entries(collectionStateName).map(
            ([id, device]) =>
              (device.type === category || category === "all") && (
                <CardGrid
                  key={id}
                  id={id}
                  collection={collectionName}
                  {...device}
                />
              )
          )}
        </div>
      </div>
    );

  if (error) content = <ErrorPage text="Something was wrong... Try again :|" />;

  return content;
};

const mapStateToProps = (state) => ({
  collection_mac: selectorItemsX(`collection_mac`)(state),
  collection_iphone: selectorItemsX(`collection_iphone`)(state),
  collection_ipad: selectorItemsX(`collection_ipad`)(state),
  collection_watch: selectorItemsX(`collection_watch`)(state),
  collection_accessories: selectorItemsX(`collection_accessories`)(state),
  error: selectorCollectionError(state),
  loading: selectorCollectionLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFetchCollectionAsyn: (collectionName) =>
    dispatch(fetchCollectionAsyn(collectionName)),
  onSetBreadcrumb: (text) => dispatch(setBreadcrumb(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccessoriesPage);
