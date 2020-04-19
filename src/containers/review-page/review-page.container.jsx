import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  removeActualDevice,
  fetchActualDeviceStart,
} from "../../redux/actualDevice/actual-device.actions";
import { selectorCollectionByKeyAndNestedKey } from "../../redux/collections/collections.selectors";
import { selectorActualDeviceByKey } from "../../redux/actualDevice/actual-device.selector";
import { addItem } from "../../redux/checkout/checkout.actions";
import { setBreadcrumb } from "../../redux/breadcrumb/breadcrumb.actions";
import ReviewPage from "../../components/review-page/review-page.component";

const ItemPage = (props) => {
  const {
    collection,
    id,
    onRemoveActualDevice,
    onFetchActualDeviceStart,
    collection_actualDevice,
    loading,
    error,
    onAddItem,
    onSetBreadcrumb,
  } = props;
  const collectionState = props[`collection_${collection}`];
  const isCollectionItemEmpty =
    collectionState &&
    Object.keys(collectionState).length === 0 &&
    collectionState.constructor === Object;
  const isCollectionActualDeviceFull =
    error === null && collection_actualDevice !== null && loading === false;
  const existItemInCollection = collectionState[id];

  useEffect(() => {
    if (isCollectionItemEmpty || !existItemInCollection)
      onFetchActualDeviceStart(collection, id);
    return () => {
      onRemoveActualDevice();
    };
  }, [
    existItemInCollection,
    collection,
    id,
    isCollectionItemEmpty,
    onFetchActualDeviceStart,
    onRemoveActualDevice,
  ]);

  useEffect(() => {
    onSetBreadcrumb("Review");
  }, [onSetBreadcrumb]);

  const addItemHandler = () => {
    if (existItemInCollection) onAddItem(existItemInCollection, collection, id);
    else onAddItem(collection_actualDevice, collection, id);
  };

  return (
    <ReviewPage
      isCollectionItemEmpty={isCollectionItemEmpty}
      existItemInCollection={existItemInCollection}
      collection_actualDevice={collection_actualDevice}
      id={id}
      collection={collection}
      addItemHandler={addItemHandler}
      isCollectionActualDeviceFull={isCollectionActualDeviceFull}
      loading={loading}
      error={error}
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
  collection_actualDevice: selectorActualDeviceByKey("collection_actualDevice")(
    state
  ),
  loading: selectorActualDeviceByKey("loading")(state),
  error: selectorActualDeviceByKey("error")(state),
});
const mapDispatchToProps = (dispatch) => ({
  onSetBreadcrumb: (text) => dispatch(setBreadcrumb(text)),
  onFetchActualDeviceStart: (collection, id) =>
    dispatch(fetchActualDeviceStart(collection, id)),
  onRemoveActualDevice: (id) => dispatch(removeActualDevice(id)),
  onAddItem: (item, collection, id) => dispatch(addItem(item, collection, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);
