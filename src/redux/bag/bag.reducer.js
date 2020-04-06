import bagActionTypes from "./bag.types";

const initialState = {
  bagCollection: [],
};

const bagReducer = (state = initialState, action) => {
  switch (action.type) {
    case bagActionTypes.ADD_ITEM:
      return {
        ...state,
        bagCollection: addItem(state.bagCollection, action.payload.item),
      };
    case bagActionTypes.REMOVE_ITEM:
      return {
        ...state,
        bagCollection: removeItem(state.bagCollection, action.payload.id),
      };
    case bagActionTypes.INCREMENT_ITEM:
      return {
        ...state,
        bagCollection: incrementItem(state.bagCollection, action.payload.id),
      };
    case bagActionTypes.DECREMENT_ITEM:
      return {
        ...state,
        bagCollection: decrementItem(state.bagCollection, action.payload.id),
      };
    default:
      return state;
  }
};

const decrementItem = (bagCollection, id) => {
  const existingItem = bagCollection.find((item) => item.id === id);
  if (existingItem.quantity === 1)
    return bagCollection.filter((item) => item.id !== id);
  else
    return bagCollection.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    );
};

const incrementItem = (bagCollection, id) => {
  return bagCollection.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  );
};

const addItem = (bagCollection, itemToAdd) => {
  const existingItem = bagCollection.find((item) => item.id === itemToAdd.id);
  if (existingItem) {
    return incrementItem(bagCollection, itemToAdd.id);
  } else {
    return [...bagCollection, { ...itemToAdd, quantity: 1 }];
  }
};

const removeItem = (bagCollection, id) => {
  return bagCollection.filter((item) => item.id !== id);
};

export default bagReducer;
