import { createSelector } from "reselect";

export const myOrdersStateSelector = (state) => state.myOrders;

export const myOrdersSelectorX = (key) => createSelector(
  [myOrdersStateSelector],
  (myOrders) => myOrders[key]
);
