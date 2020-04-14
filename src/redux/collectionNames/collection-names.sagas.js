import { takeLatest, put } from "redux-saga/effects";
import collectionNamesActionTypes from "./collection-names.types";
import { urlDatabaseCollectionName } from "../constants/constans";
import {
  fetchCollectionNamesSuccess,
  fetchCollectionNamesFailure,
} from "./collection-names.actions";

export function* fetchCollectionNamesAsync() {
  try {
    const res = yield fetch(urlDatabaseCollectionName);
    const data = yield res.json();
    yield put(fetchCollectionNamesSuccess(data));
  } catch (error) {
    yield put(fetchCollectionNamesFailure(error.message));
  }
}

export function* fetchCollectionNamesStart() {
  yield takeLatest(
    collectionNamesActionTypes.FETCH_COLLECTION_NAMES_START,
    fetchCollectionNamesAsync
  );
}
