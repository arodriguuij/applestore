import myOrdersTypeActions from "./my-order.types";
import { urlDatabaseBuy } from "../constants/constans";
import { takeLatest, put } from "redux-saga/effects";
import { fetchMyOrdersSuccess, fetchMyOrdersFailure } from "./my-orders.action";

function* fetchMyOrdersAsync({ payload }) {
  const queryParams = '?&orderBy="userId"&equalTo="' + payload.userId + '"';
  try {
    const res = yield fetch(urlDatabaseBuy + queryParams);
    const data = yield res.json();
    yield put(fetchMyOrdersSuccess(data));
  } catch (error) {
    yield put(fetchMyOrdersFailure(error.message));
  }
}

export function* fetchMyOrders() {
  yield takeLatest(
    myOrdersTypeActions.FETCH_MY_ORDERS_START,
    fetchMyOrdersAsync
  );
}
