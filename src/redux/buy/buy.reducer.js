import buyActionTypes from "./buy.types";

const initialState = {
  data: null,
  loading: null,
  error: null,
  purchased: false,
};

const purchaseInit = (state, payload) => ({
  ...state,
  purchased: payload.purchased,
});
const FetchBuyStart = (state, payload) => ({
  ...state,
  data: payload.data,
  loading: payload.loading,
  error: payload.error,
});
const fetchBuySuccess = (state, payload) => ({
  ...state,
  data: payload.data,
  loading: payload.loading,
  purchased: payload.purchased,
  error: payload.error,
});
const fetchBuyFailure = (state, payload) => ({
  ...state,
  data: payload.data,
  loading: payload.loading,
  error: payload.error,
});
const fetchBuyReset = (state, payload) => ({
  ...state,
  data: payload.data,
  loading: payload.loading,
  error: payload.error,
  purchased: payload.purchased,
});

const buyReducer = (state = initialState, action) => {
  switch (action.type) {
    case buyActionTypes.PURCHASE_INIT:
      return purchaseInit(state, action.payload);
    case buyActionTypes.FETCH_BUY_START:
      return FetchBuyStart(state, action.payload);
    case buyActionTypes.FETCH_BUY_SUCCESS:
      return fetchBuySuccess(state, action.payload);
    case buyActionTypes.FETCH_BUY_FAILURE:
      return fetchBuyFailure(state, action.payload);
    case buyActionTypes.FETCH_BUY_RESET:
      return fetchBuyReset(state, action.payload);
    default:
      return state;
  }
};

export default buyReducer;
