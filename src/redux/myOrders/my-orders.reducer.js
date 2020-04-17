import myOrdersTypeActions from "./my-order.types";

const initialState = {
  myOrdersCollection: [],
  loading: null,
  error: null,
};

const myOrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case myOrdersTypeActions.FETCH_MY_ORDERS_START:
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error,
      };
    case myOrdersTypeActions.FETCH_MY_ORDERS_SUCCESS:
      return {
        ...state,
        loading: action.payload.loading,
        myOrdersCollection: action.payload.myOrdersCollection,
      };
    case myOrdersTypeActions.FETCH_MY_ORDERS_FAILURE:
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default myOrdersReducer;
