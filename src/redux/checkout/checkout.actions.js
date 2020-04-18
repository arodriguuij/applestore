import checkoutActionTypes from "./checkout.types";

export const addItem = (item, collection, id) => {
  return {
    type: checkoutActionTypes.ADD_ITEM,
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
    type: checkoutActionTypes.REMOVE_ITEM,
    payload: {
      id: id,
    },
  };
};

export const incrementItem = (id) => {
  return {
    type: checkoutActionTypes.INCREMENT_ITEM,
    payload: {
      id: id,
    },
  };
};

export const decrementItem = (id) => {
  return {
    type: checkoutActionTypes.DECREMENT_ITEM,
    payload: {
      id: id,
    },
  };
};

export const purgeCheckoutCollection = () => {
  return {
    type: checkoutActionTypes.PURGE_CHECKOUT_COLLECTION,
    payload: {
      checkoutCollection: [],
    },
  };
};
