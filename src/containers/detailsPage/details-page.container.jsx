import React, { useEffect, lazy } from "react";
import { connect } from "react-redux";
import {
  removeActualDevice,
  fetchActualDeviceAsyn,
} from "../../redux/actualDevice/actual-device.actions";
import {
  selectorCollectionMac,
  selectorCollectionIphone,
  selectorCollectionIpad,
  selectorCollectionWatch,
  selectorCollectionAccessories
} from "../../redux/collections/collections.selectors";
import {
  selectorCollectionActualDevice,
  selectorLoading,
  selectorError,
} from "../../redux/actualDevice/actual-device.selector";
import { selectorBag } from "../../redux/bag/bag.selectors";
import { setBreadcrumb } from "../../redux/breadcrumb/breadcrumb.actions";
import { addItem } from "../../redux/bag/bag.actions";
import Spinner from "../../components/spinner/spinner.component";
import CardWithDescription from "../../components/card-with-description/card-with-description.component";
import "./details-page.styles.css";
const ErrorPage = lazy(() => import("../../components/error-page/error-page"));

const DetailsPage = (props) => {
  const {
    match,
    onRemoveActualDevice,
    onFetchActualDeviceAsyn,
    collection_actualDevice,
    loading,
    error,
    onAddItem,
    onSetBreadcrumb,
  } = props;
  const collection = match.path.split("/")[1];
  const deviceName = match.params.id;
  const collectionState = props[`collection_${collection}`];
  const isObjectAndEmpty =
    collectionState &&
    Object.keys(collectionState).length === 0 &&
    collectionState.constructor === Object;

  useEffect(() => {
    if (isObjectAndEmpty || !collectionState[deviceName])
      onFetchActualDeviceAsyn(collection, deviceName);
    return function cleanup() {
      onRemoveActualDevice();
    };
  }, [
    collection,
    deviceName,
    collectionState,
    onFetchActualDeviceAsyn,
    onRemoveActualDevice,
    isObjectAndEmpty,
  ]);

  useEffect(() => {
    onSetBreadcrumb(deviceName);
  }, [onSetBreadcrumb, deviceName]);

  const addItemHandler = () => {
    if (collectionState[deviceName])
      onAddItem(collectionState[deviceName], collection, deviceName);
    else onAddItem(collection_actualDevice, collection, deviceName);
  };


  let content;
  if (!isObjectAndEmpty && collectionState[deviceName]) {
    content = (
      <CardWithDescription
        device={collectionState[deviceName]}
        collection={collection}
        addItem={addItemHandler}
        clickable={false}
        type={"details"}
        id={deviceName}
      />
    );
  } else {
    if (
      loading ||
      (error === null && collection_actualDevice === null && loading === false)
    ) {
      content = <Spinner />;
    } else {
      if (error !== null) content = <ErrorPage text="Page not found" />;
      else {
        content = (
          <CardWithDescription
            device={collection_actualDevice}
            collection={collection}
            addItem={addItemHandler}
            clickable={false}
            type={"details"}
            id={deviceName}
          />
        );
      }
    }
  }
  return <div className={"details-page"}>{content} </div>;
};

const mapStateToProps = (state) => ({
  collection_mac: selectorCollectionMac(state),
  collection_iphone: selectorCollectionIphone(state),
  collection_ipad: selectorCollectionIpad(state),
  collection_watch: selectorCollectionWatch(state),
  collection_actualDevice: selectorCollectionActualDevice(state),
  collection_accessories: selectorCollectionAccessories(state),
  loading: selectorLoading(state),
  error: selectorError(state),
  bag: selectorBag(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFetchActualDeviceAsyn: (collection, deviceName) =>
    dispatch(fetchActualDeviceAsyn(collection, deviceName)),
  onRemoveActualDevice: (id) => dispatch(removeActualDevice(id)),
  onAddItem: (item, collection, id) => dispatch(addItem(item, collection, id)),
  onSetBreadcrumb: (text) => dispatch(setBreadcrumb(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
