import { createSelector } from "reselect";

const bagSelector = (state) => state.bag;

export const selectorBag = createSelector(
  [bagSelector],
  (bag) => bag.bagCollection
);

export const selectorNumberItemsBag = createSelector([bagSelector], (bag) =>
  getNumItems(bag.bagCollection)
);

export const selectorTotalPrice = createSelector([bagSelector], (bag) =>
  getTotalPrice(bag.bagCollection)
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
  createSelector([selectorBag], (collection) => {
    if (collection.length === 0) return 0;
    else {
      const existDevice = collection.find((item) => item.id === deviceId);
      if (existDevice) return existDevice.quantity;
      else return 0;
    }
  });
