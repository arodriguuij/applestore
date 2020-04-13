import React, { useEffect, lazy, Fragment } from "react";
import { connect } from "react-redux";
import {
  removeActualDevice,
  fetchActualDeviceAsyn,
} from "../../redux/actualDevice/actual-device.actions";
import { selectorCollectionAndX } from "../../redux/collections/collections.selectors";
import { selectorActualDeviceX } from "../../redux/actualDevice/actual-device.selector";
import { addItem } from "../../redux/checkout/checkout.actions";
import { setBreadcrumb } from "../../redux/breadcrumb/breadcrumb.actions";
import Breadcrumb from "../../components/breadcrumb/breadcrumb.component";
import Review from "../../components/review-box/review-box.components"
import "./review-page.styles.css";
const ErrorPage = lazy(() => import("../../components/error-page/error-page"));

const ItemPage = (props) => {
  const {
    path,
    params,
    onRemoveActualDevice,
    onFetchActualDeviceAsyn,
    collection_actualDevice,
    loading,
    error,
    onAddItem,
    onSetBreadcrumb,
  } = props;
  const collection = path.split("/")[1];
  const deviceName = params.id;
  const collectionState = props[`collection_${collection}`];
  const isCollectionItemEmpty =
    collectionState &&
    Object.keys(collectionState).length === 0 &&
    collectionState.constructor === Object;
  const isCollectionActualDeviceFull =
    error === null && collection_actualDevice !== null && loading === false;
  const existItemInCollection = collectionState[deviceName];

  useEffect(() => {
    if (isCollectionItemEmpty || !existItemInCollection)
      onFetchActualDeviceAsyn(collection, deviceName);
    return () => {
      onRemoveActualDevice();
    };
  }, [
    existItemInCollection,
    collection,
    deviceName,
    isCollectionItemEmpty,
    onFetchActualDeviceAsyn,
    onRemoveActualDevice,
  ]);

  useEffect(() => {
    onSetBreadcrumb("Review");
  }, [onSetBreadcrumb]);

  const addItemHandler = () => {
    if (existItemInCollection)
      onAddItem(existItemInCollection, collection, deviceName);
    else onAddItem(collection_actualDevice, collection, deviceName);
  };

  let content;
  if (!isCollectionItemEmpty && existItemInCollection) {
    content = (
      <Review
        id={deviceName}
        collection={collection}
        img={existItemInCollection.img}
        device={existItemInCollection}
        addItem={addItemHandler}
      />
    );
  } else {
    if (isCollectionActualDeviceFull) {
      content = (
        <Review
          id={deviceName}
          collection={collection}
          img={collection_actualDevice.img}
          device={collection_actualDevice}
          addItem={addItemHandler}
        />
      );
    }
  }
  if (error !== null) content = <ErrorPage text={error} />;

  return (
    <Fragment>
      <Breadcrumb />
      <div className={"review-page"}>{content}</div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  collection_Mac: selectorCollectionAndX("collection_Mac", "items")(state),
  collection_iPhone: selectorCollectionAndX(
    "collection_iPhone",
    "items"
  )(state),
  collection_iPad: selectorCollectionAndX("collection_iPad", "items")(state),
  collection_iWatch: selectorCollectionAndX(
    "collection_iWatch",
    "items"
  )(state),
  collection_Accessories: selectorCollectionAndX(
    "collection_Accessories",
    "items"
  )(state),
  collection_actualDevice: selectorActualDeviceX("collection_actualDevice")(
    state
  ),
  loading: selectorActualDeviceX("loading")(state),
  error: selectorActualDeviceX("error")(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSetBreadcrumb: (text) => dispatch(setBreadcrumb(text)),
  onFetchActualDeviceAsyn: (collection, deviceName) =>
    dispatch(fetchActualDeviceAsyn(collection, deviceName)),
  onRemoveActualDevice: (id) => dispatch(removeActualDevice(id)),
  onAddItem: (item, collection, id) => dispatch(addItem(item, collection, id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);
