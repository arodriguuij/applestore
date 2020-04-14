import homePageCollectionsActionTypes from "./home-page-collections.types";
import { urlDababaseCollectionMainPage } from "../constants/constans";
import { takeLatest, put } from "redux-saga/effects";
import {
  fetchHomePageCollectionsSuccess,
  fetchHomePageCollectionsFailure,
} from "./home-page-collections.actions";

export function* fetchHomePageCollectionsAsync() {
  try {
    const res = yield fetch(urlDababaseCollectionMainPage);
    const data = yield res.json();
    yield put(fetchHomePageCollectionsSuccess(data));
  } catch (error) {
    yield put(fetchHomePageCollectionsFailure(error.message));
  }
}

export function* fetchHomePageCollectionsStart() {
  yield takeLatest(
    homePageCollectionsActionTypes.FETCH_HOME_PAGE_COLLECTIONS_START,
    fetchHomePageCollectionsAsync
  );
}
