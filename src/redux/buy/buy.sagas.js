import buyActionTypes from "./buy.types";
import { urlDatabaseBuy } from "../constants/constans";
import { takeLatest, put } from "redux-saga/effects";
import { fetchBuySuccess, fetchBuyFailure } from "./buy.actions";
import { persistor } from "../store";

function* fetchBuyAsync({ payload }) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload.data),
  };

  try {
    const res = yield fetch(urlDatabaseBuy, requestOptions);
    yield put(fetchBuySuccess(res.status));
    yield persistor.purge();
  } catch (error) {
    yield put(fetchBuyFailure("Error"));
  }
}

export function* fetchBuyStart() {
  yield takeLatest(buyActionTypes.FETCH_BUY_START, fetchBuyAsync);
}
