import checkoutActionTypes from "./checkout.types";

const initialState = {
  checkoutCollection: [],
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case checkoutActionTypes.ADD_ITEM:
      return {
        ...state,
        checkoutCollection: addItem(state.checkoutCollection, action.payload.item),
      };
    case checkoutActionTypes.REMOVE_ITEM:
      return {
        ...state,
        checkoutCollection: removeItem(state.checkoutCollection, action.payload.id),
      };
    case checkoutActionTypes.INCREMENT_ITEM:
      return {
        ...state,
        checkoutCollection: incrementItem(state.checkoutCollection, action.payload.id),
      };
    case checkoutActionTypes.DECREMENT_ITEM:
      return {
        ...state,
        checkoutCollection: decrementItem(state.checkoutCollection, action.payload.id),
      };
    default:
      return state;
  }
};

const decrementItem = (checkoutCollection, id) => {
  const existingItem = checkoutCollection.find((item) => item.id === id);
  if (existingItem.quantity === 1)
    return checkoutCollection.filter((item) => item.id !== id);
  else
    return checkoutCollection.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    );
};

const incrementItem = (checkoutCollection, id) => {
  return checkoutCollection.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  );
};

const addItem = (checkoutCollection, itemToAdd) => {
  const existingItem = checkoutCollection.find((item) => item.id === itemToAdd.id);
  if (existingItem) {
    return incrementItem(checkoutCollection, itemToAdd.id);
  } else {
    return [...checkoutCollection, { ...itemToAdd, quantity: 1 }];
  }
};

const removeItem = (checkoutCollection, id) => {
  return checkoutCollection.filter((item) => item.id !== id);
};

export default checkoutReducer;
