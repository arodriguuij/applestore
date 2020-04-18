import myOrdersTypeActions from "./my-order.types";

const initialState = {
  myOrdersCollection: [],
  loading: null,
  error: null,
};

const fetchMyOrdersStart = (state, payload) => ({
  ...state,
  loading: payload.loading,
  error: payload.error,
});
const fetchMyOrdersSuccess = (state, payload) => ({
  ...state,
  loading: payload.loading,
  myOrdersCollection: payload.myOrdersCollection,
});
const fetchMyOrdersFailure = (state, payload) => ({
  ...state,
  loading: payload.loading,
  error: payload.error,
});

const myOrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case myOrdersTypeActions.FETCH_MY_ORDERS_START:
      return fetchMyOrdersStart(state, action.payload);
    case myOrdersTypeActions.FETCH_MY_ORDERS_SUCCESS:
      return fetchMyOrdersSuccess(state, action.payload);
    case myOrdersTypeActions.FETCH_MY_ORDERS_FAILURE:
      return fetchMyOrdersFailure(state, action.payload);
    default:
      return state;
  }
};

export default myOrdersReducer;
