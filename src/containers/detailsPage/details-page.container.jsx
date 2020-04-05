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
} from "../../redux/collections/collections.selectors";
import {
  selectorCollectionActualDevice,
  selectorLoading,
  selectorError,
} from "../../redux/actualDevice/actual-device.selector";
import Spinner from "../../components/spinner/spinner.component";
import CardWithDescription from "../../components/card-with-description/card-with-description.component";
import PageContent from "../../components/page-content/page-content.component";
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

  let content;
  if (!isObjectAndEmpty && collectionState[deviceName]) {
    content = (
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
    );
  } else {
    if (
      loading ||
      (error === null && collection_actualDevice === null && loading === false)
    ) {
      content = <Spinner />;
    } else {
      if (error !== null) content = <ErrorPage text="Page not found" />;
      else
        content = (
          <PageContent
            classesContainer={"details-page-container"}
            classesMain={"details-page-main"}
            text={collection_actualDevice.name}
          >
            <CardWithDescription
              device={collection_actualDevice}
              collection={collection}
              extraInformation
            />
          </PageContent>
        );
    }
  }
  return content;
};

const mapStateToProps = (state) => ({
  collection_mac: selectorCollectionMac(state),
  collection_iphone: selectorCollectionIphone(state),
  collection_ipad: selectorCollectionIpad(state),
  collection_watch: selectorCollectionWatch(state),
  collection_actualDevice: selectorCollectionActualDevice(state),
  loading: selectorLoading(state),
  error: selectorError(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFetchActualDeviceAsyn: (collection, deviceName) =>
    dispatch(fetchActualDeviceAsyn(collection, deviceName)),
  onRemoveActualDevice: () => dispatch(removeActualDevice()),
});
export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
