import { createSelector } from "reselect";

const authenticationSelector = (state) => state.authentication;

export const authenticationSelectorX = (key) =>
  createSelector([authenticationSelector], (authentication) => {
    return authentication[key];
  });

  export const authenticationSelectorXandSubtype = (key, subtype) =>
  createSelector([authenticationSelector], (authentication) => {
    return authentication[key][subtype];
  });
