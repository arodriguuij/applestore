import React, { useEffect } from "react";
import { connect } from "react-redux";
import Card from "../../components/card/card.component";
import "./details-page.styles.css";
import {
  removeActualDevice,
  fetchActualDeviceAsyn,
} from "../../redux/actualDevice/actual-device.actions";
import Spinner from "../../components/spinner/spinner.component";
import ErrorPage from "../../components/error-page/error-page";

const DetailsPage = (props) => {
  const collection = props.match.path.split("/")[1];
  const deviceName = props.match.params.id;
  const collectionState = props[`collection_${collection}`];
  const { onRemoveActualDevice, onFetchActualDeviceAsyn } = props;

  useEffect(() => {
    if (
      collectionState &&
      Object.keys(collectionState).length === 0 &&
      collectionState.constructor === Object
    ) {
      console.log("DETAILS-PAGE sending onFetchDetailsAsyn");
      onFetchActualDeviceAsyn(collection, deviceName);
    }

    return function cleanup() {
      onRemoveActualDevice();
    };
  }, [
    collection,
    deviceName,
    collectionState,
    onFetchActualDeviceAsyn,
    onRemoveActualDevice,
  ]);

  let content = !(
    collectionState &&
    Object.keys(collectionState).length === 0 &&
    collectionState.constructor === Object
  ) ? (
    <div className="details-page-main">
      <Card {...collectionState[deviceName]} collection={collection} />
    </div>
  ) : props.collection_actualDevice ? (
    <div className="details-page-main">
      <Card {...props.collection_actualDevice} collection={""} />
    </div>
  ) : <ErrorPage />;

  if (props.loading) content = <Spinner />;

  return content;
};

const mapStateToProps = (state) => ({
  collection_mac: state.collections.collection_mac,
  collection_iphone: state.collections.collection_iphone,
  collection_ipad: state.collections.collection_ipad,
  collection_watch: state.collections.collection_watch,
  collection_actualDevice: state.actualDevice.collection_actualDevice,
  error: state.collections.error,
  loading: state.actualDevice.loading,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchActualDeviceAsyn: (collection, deviceName) =>
    dispatch(fetchActualDeviceAsyn(collection, deviceName)),
  onRemoveActualDevice: () => dispatch(removeActualDevice()),
});
export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
