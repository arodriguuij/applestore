import checkoutActionTypes from "./checkout.types";

const initialState = {
  checkoutCollection: [],
};

const addItem = (state, payload) => {
  return {
    ...state,
    checkoutCollection: addItemLogic(state.checkoutCollection, payload.item),
  };
};
const removeItem = (state, payload) => {
  return {
    ...state,
    checkoutCollection: removeItemLogic(state.checkoutCollection, payload.id),
  };
};
const incrementItem = (state, payload) => {
  return {
    ...state,
    checkoutCollection: incrementItemLogic(
      state.checkoutCollection,
      payload.id
    ),
  };
};
const decrementItem = (state, payload) => {
  return {
    ...state,
    checkoutCollection: decrementItemLogic(
      state.checkoutCollection,
      payload.id
    ),
  };
};

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
    default:
      return state;
  }
};

const decrementItemLogic = (checkoutCollection, id) => {
  const existingItem = checkoutCollection.find((item) => item.id === id);
  if (existingItem.quantity === 1)
    return checkoutCollection.filter((item) => item.id !== id);
  else
    return checkoutCollection.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    );
};

const incrementItemLogic = (checkoutCollection, id) => {
  return checkoutCollection.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  );
};

const addItemLogic = (checkoutCollection, itemToAdd) => {
  const existingItem = checkoutCollection.find(
    (item) => item.id === itemToAdd.id
  );
  if (existingItem) {
    return incrementItemLogic(checkoutCollection, itemToAdd.id);
  } else {
    return [...checkoutCollection, { ...itemToAdd, quantity: 1 }];
  }
};

const removeItemLogic = (checkoutCollection, id) => {
  return checkoutCollection.filter((item) => item.id !== id);
};

export default checkoutReducer;
