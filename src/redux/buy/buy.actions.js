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
    },
  };
};

export const fetchBuySuccess = () => {
  return {
    type: buyActionTypes.FETCH_BUY_SUCCESS,
    payload: {
      data: null,
      loading: false,
      purchased: true,
      error: false,
    },
  };
};

export const fetchBuyFailure = () => {
  return {
    type: buyActionTypes.FETCH_BUY_FAILURE,
    payload: {
      data: null,
      loading: false,
      error: true,
      data: null,
    },
  };
};

export const fetchBuyReset = () => {
  return {
    type: buyActionTypes.FETCH_BUY_RESET,
    payload: {
      data: null,
      loading: null,
      error: null,
      purchased: false,
    },
  };
};
