import { createSelector } from "reselect";

const buySelectorState = (state) => state.buy;

export const selectorBuyByKey = (key) =>
  createSelector([buySelectorState], (buy) => buy[key]);
