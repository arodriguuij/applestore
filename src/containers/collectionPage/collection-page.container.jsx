import React, { useEffect, lazy } from "react";
import { connect } from "react-redux";
import { fetchCollectionAsyn } from "../../redux/collections/collections.actions";
import Spinner from "../../components/spinner/spinner.component";
import CardWithDescription from "../../components/card-with-description/card-with-description.component";
import { setBreadcrumb } from "../../redux/breadcrumb/breadcrumb.actions";
import {
  selectorCollectionMac,
  selectorCollectionIphone,
  selectorCollectionIpad,
  selectorCollectionWatch,
  selectorCollectionLoading,
  selectorCollectionError,
} from "../../redux/collections/collections.selectors";
import "./collection-page.styles.css";
const ErrorPage = lazy(() => import("../../components/error-page/error-page"));

const CollectionPage = (props) => {
  const {
    onFetchCollectionAsyn,
    loading,
    error,
    match,
    onSetBreadcrumb,
  } = props;
  const collectionName = match.path.substr(1);
  const collectionStateName = props[`collection_${collectionName}`];
  const isObjectAndEmpty =
    Object.keys(collectionStateName).length === 0 &&
    collectionStateName.constructor === Object;

  useEffect(() => {
    if (isObjectAndEmpty) return onFetchCollectionAsyn(collectionName);
  }, [
    collectionName,
    collectionStateName,
    onFetchCollectionAsyn,
    isObjectAndEmpty,
  ]);

  useEffect(() => {
    onSetBreadcrumb(collectionName);
  }, [onSetBreadcrumb, collectionName]);

  let content = <Spinner />;

  if (!loading)
    content = (
      <div className={"collection-page"}>
        {Object.entries(collectionStateName).map(([id, device]) => (
          <CardWithDescription
            key={id}
            id={id}
            collection={collectionName}
            device={device}
            clickable={false}
            type={"collection"}
          />
        ))}
      </div>
    );

  if (error) content = <ErrorPage text="Something was wrong... Try again :|" />;

  return content;
};

const mapStateToProps = (state) => ({
  collection_mac: selectorCollectionMac(state),
  collection_iphone: selectorCollectionIphone(state),
  collection_ipad: selectorCollectionIpad(state),
  collection_watch: selectorCollectionWatch(state),
  error: selectorCollectionError(state),
  loading: selectorCollectionLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFetchCollectionAsyn: (collectionName) =>
    dispatch(fetchCollectionAsyn(collectionName)),
  onSetBreadcrumb: (text) => dispatch(setBreadcrumb(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage);
