import { takeLatest, put } from "redux-saga/effects";
import collectionsActionTypes from "./collections.types";
import { urlDatabase } from "../constants/constans";
import {
  fetchCollectionSuccess,
  fetchCollectionFailure,
} from "./collections.actions";

export function* fetchCollectionAsync({ payload }) {
  try {
    const res = yield fetch(
      urlDatabase + `collections/${payload.collectionName}.json`
    );
    const data = yield res.json();
    yield put(fetchCollectionSuccess(data, payload.collectionName));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(
    collectionsActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionAsync
  );
}
