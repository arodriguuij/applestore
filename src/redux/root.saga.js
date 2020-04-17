import { all, call } from "redux-saga/effects";
import { fetchHomePageCollectionsStart } from "./homePageCollections/home-page-collections.sagas";
import { fetchCollectionNamesStart } from "./collectionNames/collection-names.sagas";
import { fetchActualDeviceStart } from "./actualDevice/actual-device.sagas";
import { fetchCollectionStart } from "./collections/collection.sagas";
import { fetchBuyStart } from "./buy/buy.sagas";
import { fetchMyOrders } from "./myOrders/my-order.sagas";

export default function* rootSaga() {
  yield all([
    call(fetchHomePageCollectionsStart),
    call(fetchCollectionNamesStart),
    call(fetchActualDeviceStart),
    call(fetchCollectionStart),
    call(fetchBuyStart),
    call(fetchMyOrders),
  ]);
}
