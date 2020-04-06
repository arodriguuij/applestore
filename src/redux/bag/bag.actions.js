import bagActionTypes from "./bag.types";

export const addItem = (item, collection, id) => {
  return {
    type: bagActionTypes.ADD_ITEM,
    payload: {
      item: {
        ...item,
        collection: collection,
        id: id,
      },
    },
  };
};

export const removeItem = (id) => {
  return {
    type: bagActionTypes.REMOVE_ITEM,
    payload: {
      id: id,
    },
  };
};

export const incrementItem = (id) => {
  return {
    type: bagActionTypes.INCREMENT_ITEM,
    payload: {
      id: id,
    },
  };
};

export const decrementItem = (id) => {
  return {
    type: bagActionTypes.DECREMENT_ITEM,
    payload: {
      id: id,
    },
  };
};
