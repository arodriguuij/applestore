import actualDeviceActionTypes from "./actual-device.types";
import { urlDatabase } from "../constants/constans";

export const fetchActualDeviceAsyn = (collectionName, deviceName) => (
  dispatch
) => {
  dispatch(fetchActualDeviceStart());
  fetch(
    urlDatabase +
      `collections/${collectionName}/items/${deviceName}.json`
  )
    .then((res) => res.json())
    .then((data) =>
      data
        ? dispatch(fetchActualDeviceSuccess(data, collectionName, deviceName))
        : dispatch(fetchActualDeviceFailure("Device does not exist"))
    )
    .catch((err) => dispatch(fetchActualDeviceFailure(err.message)));
};

export const fetchActualDeviceStart = (collectionName, deviceName) => {
  return {
    type: actualDeviceActionTypes.FETCH_ACTUAL_DEVICE_START,
    payload: {
      collectionName,
      deviceName,
      loading: true,
      error: null,
    },
  };
};


export const fetchActualDeviceSuccess = (data) => {
  return {
    type: actualDeviceActionTypes.FETCH_ACTUAL_DEVICE_SUCCESS,
    payload: {
      collection: data,
      loading: false,
    },
  };
};

export const fetchActualDeviceFailure = (error) => {
  return {
    type: actualDeviceActionTypes.FETCH_ACTUAL_DEVICE_FAILURE,
    payload: {
      loading: false,
      error: error,
    },
  };
};

export const removeActualDevice = () => {
  return {
    type: actualDeviceActionTypes.REMOVE_ACTUAL_DEVICE,
    payload: {
      collection: null,
      error: null,
      loading: false,
    },
  };
};
