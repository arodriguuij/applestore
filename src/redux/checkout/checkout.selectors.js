import { createSelector } from "reselect";

const checkoutSelectorState = (state) => state.checkout;

export const selectorCheckout = createSelector(
  [checkoutSelectorState],
  (checkout) => checkout.checkoutCollection
);

export const selectorNumberItems = createSelector(
  [selectorCheckout],
  (checkout) => {
    return getNumItems(checkout);
  }
);

export const selectorTotalPrice = createSelector(
  [selectorCheckout],
  (checkout) => {
    return getTotalPrice(checkout);
  }
);

const getNumItems = (collection) => {
  return collection.length === 0
    ? 0
    : collection.reduce((acc, item) => acc + item.quantity, 0);
};

const getTotalPrice = (collection) => {
  return collection.length === 0
    ? 0
    : collection.reduce((acc, item) => acc + item.quantity * item.price, 0);
};

export const selectNumItemsOfDevice = (deviceId) =>
  createSelector([selectorCheckout], (collection) => {
    if (collection.length === 0) return 0;
    else {
      const existDevice = collection.find((item) => item.id === deviceId);
      if (existDevice) return existDevice.quantity;
      else return 0;
    }
  });
