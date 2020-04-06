import devicesActionTypes from "./devices.types";

export const fetchDevicesAsyn = () => dispatch => {
  dispatch(fetchDevicesStart());
  fetch(`https://applestore-db.firebaseio.com/collectionMainPage.json`)
    .then(res => res.json())
    .then(data => dispatch(fetchDevicesSuccess(data)))
    .catch(err => dispatch(fetchDevicesFailure(err.message)));
};

const fetchDevicesStart = () => {
  return {
    type: devicesActionTypes.FETCH_DEVICES_START,
    payload: {
      loading: true,
      error: null
    }
  };
};

const fetchDevicesSuccess = (data) => {
  return {
    type: devicesActionTypes.FETCH_DEVICES_SUCCESS,
    payload: {
      data: data,
      loading: false
    }
  };
};

export const fetchDevicesFailure = error => {
  return {
    type: devicesActionTypes.FETCH_DEVICES_FAILURE,
    payload: {
      loading: false,
      error: error
    }
  };
};
