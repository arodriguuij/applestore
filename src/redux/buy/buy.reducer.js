import buyActionTypes from "./buy.types";

const initialState = {
  data: null,
  loading: null,
  error: null,
  purchased: false
};

const buyReducer = (state = initialState, action) => {
  switch (action.type) {
    case buyActionTypes.PURCHASE_INIT:
      return{
        ...state,
        purchased: action.payload.purchased
      }
    case buyActionTypes.FETCH_BUY_START:
      return {
        ...state,
        data: action.payload.data,
        loading: action.payload.loading,
        error: action.payload.error,
      };
    case buyActionTypes.FETCH_BUY_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: action.payload.loading,
        purchased: action.payload.purchased,
        error: action.payload.error
      };
    case buyActionTypes.FETCH_BUY_FAILURE:
      return {
        ...state,
        data: action.payload.data,
        loading: action.payload.loading,
        error: action.payload.error,
      };
    case buyActionTypes.FETCH_BUY_RESET:
      debugger;
      return{
        ...state,
        data: action.payload.data,
        loading: action.payload.loading,
        error: action.payload.error,
        purchased: action.payload.purchased
      }
    default:
      return state;
  }
};

export default buyReducer;
