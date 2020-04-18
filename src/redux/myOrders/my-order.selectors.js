import { createSelector } from "reselect";

export const myOrdersSelectorState = (state) => state.myOrders;

export const myOrdersSelectorByKey = (key) => createSelector(
  [myOrdersSelectorState],
  (myOrders) => myOrders[key]
);
