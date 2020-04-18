import { createSelector } from "reselect";

const authenticationSelectorState = (state) => state.authentication;

export const selectorAuthenticationByKey = (key) =>
  createSelector([authenticationSelectorState], (authentication) => {
    return authentication[key];
  });

export const selectorAuthenticationByKeyAndNestedKey = (key, nestedKey) =>
  createSelector([authenticationSelectorState], (authentication) => {
    return authentication[key][nestedKey];
  });
