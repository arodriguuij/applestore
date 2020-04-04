import shopActionTypes from "./actual-device.types";

export const fetchActualDeviceAsyn = (collectionName, deviceName) => dispatch => {
  dispatch(fetchActualDeviceStart());

  fetch(`https://applestore-db.firebaseio.com/collections/${collectionName}/${deviceName}.json`)
    .then(res => res.json())
    .then(data =>
      data
        ? dispatch(
          fetchActualDeviceSuccess(data, collectionName, deviceName)
          )
        : dispatch(fetchActualDeviceFailure("Device does not exist"))
    )
    .catch(err => dispatch(fetchActualDeviceFailure(err.message)));
};

const fetchActualDeviceStart = () => {
  return {
    type: shopActionTypes.FETCH_ACTUAL_DEVICE_START,
    payload: {
      loading: true,
      error: ""
    }
  };
};

const fetchActualDeviceSuccess = (data, collectionName, deviceName) => {
  return {
    type: shopActionTypes.FETCH_ACTUAL_DEVICE_SUCCESS,
    payload: {
      collection: data,
      loading: false,
    }
  };
};

export const fetchActualDeviceFailure = error => {
  return {
    type: shopActionTypes.FETCH_ACTUAL_DEVICE_FAILURE,
    payload: {
      loading: false,
      error: error
    }
  };
};

export const removeActualDevice = () => {
  return {
    type: shopActionTypes.REMOVE_ACTUAL_DEVICE,
    payload: {
      collection_actualDevice: null
    }
  };
};
