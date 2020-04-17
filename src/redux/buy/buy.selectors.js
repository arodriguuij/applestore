import { createSelector } from "reselect";

const buySelector = (state) => state.buy;

export const buySelectX = (key) =>
  createSelector([buySelector], (buy) => buy[key]);
