import { all, call } from "redux-saga/effects";
import { fetchHomePageCollectionsStart } from "./homePageCollections/home-page-collections.sagas";
import { fetchCollectionNamesStart } from "./collectionNames/collection-names.sagas";
import { fetchActualDeviceStart } from "./actualDevice/actual-device.sagas";
import { fetchCollectionStart } from "./collections/collection.sagas";

export default function* rootSaga() {
  yield all([
    call(fetchHomePageCollectionsStart),
    call(fetchCollectionNamesStart),
    call(fetchActualDeviceStart),
    call(fetchCollectionStart),
  ]);
}
