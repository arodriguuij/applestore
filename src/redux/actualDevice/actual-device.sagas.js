import { takeLatest, put } from "redux-saga/effects";
import actualDeviceActionTypes from "./actual-device.types";
import { urlDatabase } from "../constants/constans";
import {
  fetchActualDeviceSuccess,
  fetchActualDeviceFailure,
} from "./actual-device.actions";

export function* fetchActualDeviceAsync({ payload }) {
  const { collectionName, deviceName } = payload;
  try {
    const res = yield fetch(
      urlDatabase + `collections/${collectionName}/items/${deviceName}.json`
    );
    const data = yield res.json();
    data
      ? yield put(fetchActualDeviceSuccess(data))
      : yield put(fetchActualDeviceFailure("Device does not exist"));
  } catch (error) {
    yield put(fetchActualDeviceFailure(error.message));
  }
}

export function* fetchActualDeviceStart() {
  yield takeLatest(
    actualDeviceActionTypes.FETCH_ACTUAL_DEVICE_START,
    fetchActualDeviceAsync
  );
}
