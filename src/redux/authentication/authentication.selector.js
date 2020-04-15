import { createSelector } from "reselect";

const authenticationSelector = (state) => state.authentication;

export const authenticationSelectorX = (key) =>
  createSelector([authenticationSelector], (authentication) => {
    return authentication[key];
  });
