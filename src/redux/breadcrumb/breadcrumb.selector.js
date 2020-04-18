import { createSelector } from "reselect";

const breadcrumbSelector = (state) => state.breadcrumb;

export const breadcrumbSelectorByKey = (key) => createSelector(
  [breadcrumbSelector],
  (breadcrumb) => breadcrumb[key]
);
