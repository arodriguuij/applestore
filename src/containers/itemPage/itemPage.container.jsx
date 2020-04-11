import React, { useEffect, lazy, Fragment } from "react";
import { connect } from "react-redux";
import {
  removeActualDevice,
  fetchActualDeviceAsyn,
} from "../../redux/actualDevice/actual-device.actions";
import { selectorItemsX } from "../../redux/collections/collections.selectors";
import { selectorActualDeviceX } from "../../redux/actualDevice/actual-device.selector";
import { addItem } from "../../redux/checkout/checkout.actions";
import Spinner from "../../components/spinner/spinner.component";
import { setBreadcrumb } from "../../redux/breadcrumb/breadcrumb.actions";
import Breadcrumb from "../../components/breadcrumb/breadcrumb.component";
import CardDetails from "../../components/card-details/card-details.components";
import "./itemPage.styles.css";
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
  const stateBeforeFetch =
    error === null && collection_actualDevice === null && loading === false;
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
      <CardDetails
        id={deviceName}
        collection={collection}
        img={existItemInCollection.img}
        clickable={false}
        device={existItemInCollection}
        addItem={addItemHandler}
      />
    );
  } else {
    if (loading || stateBeforeFetch) {
      content = <Spinner />;
    } else {
      if (error !== null) content = <ErrorPage text={error} />;
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
      <Breadcrumb />
      <div className={"details-page"}>{content}</div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  collection_Mac: selectorItemsX(`collection_Mac`)(state),
  collection_iPhone: selectorItemsX(`collection_iPhone`)(state),
  collection_iPad: selectorItemsX(`collection_iPad`)(state),
  collection_iWatch: selectorItemsX(`collection_iWatch`)(state),
  collection_actualDevice: selectorActualDeviceX("collection_actualDevice")(
    state
  ),
  collection_Accessories: selectorItemsX(`collection_Accessories`)(state),
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
