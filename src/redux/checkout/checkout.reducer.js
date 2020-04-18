import checkoutActionTypes from "./checkout.types";
import {
  decrementItemLogic,
  incrementItemLogic,
  addItemLogic,
  removeItemLogic,
} from "./auxLogic";

const initialState = {
  checkoutCollection: [],
};

const addItem = (state, payload) => ({
  ...state,
  checkoutCollection: addItemLogic(state.checkoutCollection, payload.item),
});
const removeItem = (state, payload) => ({
  ...state,
  checkoutCollection: removeItemLogic(state.checkoutCollection, payload.id),
});
const incrementItem = (state, payload) => ({
  ...state,
  checkoutCollection: incrementItemLogic(state.checkoutCollection, payload.id),
});
const decrementItem = (state, payload) => ({
  ...state,
  checkoutCollection: decrementItemLogic(state.checkoutCollection, payload.id),
});
const purgeCheckoutCollection = (state, payload) => ({
  ...state,
  checkoutCollection: payload.checkoutCollection,
});

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case checkoutActionTypes.ADD_ITEM:
      return addItem(state, action.payload);
    case checkoutActionTypes.REMOVE_ITEM:
      return removeItem(state, action.payload);
    case checkoutActionTypes.INCREMENT_ITEM:
      return incrementItem(state, action.payload);
    case checkoutActionTypes.DECREMENT_ITEM:
      return decrementItem(state, action.payload);
    case checkoutActionTypes.PURGE_CHECKOUT_COLLECTION:
      return purgeCheckoutCollection(state, action.payload);
    default:
      return state;
  }
};

export default checkoutReducer;
