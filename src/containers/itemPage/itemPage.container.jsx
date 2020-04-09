import React, { useEffect, lazy, Fragment } from "react";
import { connect } from "react-redux";
import {
  removeActualDevice,
  fetchActualDeviceAsyn,
} from "../../redux/actualDevice/actual-device.actions";
import { selectorItemsX } from "../../redux/collections/collections.selectors";
import {
  selectorCollectionActualDevice,
  selectorLoading,
  selectorError,
} from "../../redux/actualDevice/actual-device.selector";
import { selectorBag } from "../../redux/bag/bag.selectors";
import { setBreadcrumb } from "../../redux/breadcrumb/breadcrumb.actions";
import { addItem } from "../../redux/bag/bag.actions";
import Spinner from "../../components/spinner/spinner.component";
import CardDetails from "../../components/card-details/card-details.components";
import "./itemPage.styles.css";
const ErrorPage = lazy(() => import("../../components/error-page/error-page"));

const ItemPage = (props) => {
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
    collection_actualDevice
      ? onSetBreadcrumb(collection_actualDevice.name)
      : onSetBreadcrumb(collectionState[deviceName]);
  }, [onSetBreadcrumb, deviceName, collectionState, collection_actualDevice]);

  const addItemHandler = () => {
    if (collectionState[deviceName])
      onAddItem(collectionState[deviceName], collection, deviceName);
    else onAddItem(collection_actualDevice, collection, deviceName);
  };

  let content;
  if (!isObjectAndEmpty && collectionState[deviceName]) {
    content = (
      <CardDetails
        id={deviceName}
        collection={collection}
        img={collectionState[deviceName].img}
        clickable={false}
        device={collectionState[deviceName]}
        addItem={addItemHandler}
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
          <CardDetails
            id={deviceName}
            collection={collection}
            img={collection_actualDevice.img}
            clickable={false}
            device={collection_actualDevice}
            addItem={addItemHandler}
          />
        );
      }
    }
  }
  return (
    <Fragment>
      <div className={"details-page"}>{content}</div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  collection_Mac: selectorItemsX(`collection_Mac`)(state),
  collection_iPhone: selectorItemsX(`collection_iPhone`)(state),
  collection_iPad: selectorItemsX(`collection_iPad`)(state),
  collection_iWatch: selectorItemsX(`collection_iWatch`)(state),
  collection_actualDevice: selectorCollectionActualDevice(state),
  collection_Accessories: selectorItemsX(`collection_Accessories`)(state),
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
export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);
