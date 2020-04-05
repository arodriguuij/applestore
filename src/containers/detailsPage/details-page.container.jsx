import React, { useEffect } from "react";
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
  selectorCollectionLoading,
  selectorCollectionError,
} from "../../redux/collections/collections.selectors";
import {selectorCollectionActualDevice} from '../../redux/actualDevice/actual-device.selector';
import Spinner from "../../components/spinner/spinner.component";
import ErrorPage from "../../components/error-page/error-page";
import CardWithDescription from "../../components/card-with-description/card-with-description.component";
import PageContent from "../../components/page-content/page-content.component";
import "./details-page.styles.css";

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
    <PageContent
      classesContainer={"details-page-container"}
      classesMain={"details-page-main"}
      text={collectionState[deviceName].name}
    >
      <CardWithDescription
        device={collectionState[deviceName]}
        collection={collection}
        extraInformation
      />
    </PageContent>
  ) : props.collection_actualDevice ? (
    <PageContent
      classesContainer={"details-page-container"}
      classesMain={"details-page-main"}
      text={props.collection_actualDevice.name}
    >
      <CardWithDescription
        device={props.collection_actualDevice}
        collection={collection}
        extraInformation
      />
    </PageContent>
  ) : (
    <ErrorPage />
  );

  if (props.loading) content = <Spinner />;

  return content;
};

const mapStateToProps = (state) => ({
  collection_mac: selectorCollectionMac(state),
  collection_iphone: selectorCollectionIphone(state),
  collection_ipad: selectorCollectionIpad(state),
  collection_watch: selectorCollectionWatch(state),
  collection_actualDevice: selectorCollectionActualDevice(state),
  error: selectorCollectionError(state),
  loading: selectorCollectionLoading(state),
});


const mapDispatchToProps = (dispatch) => ({
  onFetchActualDeviceAsyn: (collection, deviceName) =>
    dispatch(fetchActualDeviceAsyn(collection, deviceName)),
  onRemoveActualDevice: () => dispatch(removeActualDevice()),
});
export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
