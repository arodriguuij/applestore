import buyActionTypes from "./buy.types";

export const purchaseInit = () => {
  return {
    type: buyActionTypes.PURCHASE_INIT,
    payload: {
      purchased: false,
    },
  };
};

export const fetchBuyStart = (data) => {
  return {
    type: buyActionTypes.FETCH_BUY_START,
    payload: {
      data,
      loading: true,
      error: null,
    },
  };
};

export const fetchBuySuccess = (statusCode) => {
  return {
    type: buyActionTypes.FETCH_BUY_SUCCESS,
    payload: {
      loading: false,
      purchased: true,
    },
  };
};

export const fetchBuyFailure = (error) => {
  return {
    type: buyActionTypes.FETCH_BUY_FAILURE,
    payload: {
      loading: false,
      error,
      data: null,
    },
  };
};
