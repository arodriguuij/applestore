import myOrdersTypeActions from "./my-order.types";

export const fetchMyOrdersStart = (userId) => {
  return {
    type: myOrdersTypeActions.FETCH_MY_ORDERS_START,
    payload: {
      userId,
      loading: true,
      error: null,
    },
  };
};

export const fetchMyOrdersSuccess = (myOrdersCollection) => {
  return {
    type: myOrdersTypeActions.FETCH_MY_ORDERS_SUCCESS,
    payload: {
      myOrdersCollection: myOrdersCollection,
      loading: false,
    },
  };
};

export const fetchMyOrdersFailure = (error) => {
  return {
    type: myOrdersTypeActions.FETCH_MY_ORDERS_FAILURE,
    payload: {
      loading: false,
      error,
    },
  };
};
