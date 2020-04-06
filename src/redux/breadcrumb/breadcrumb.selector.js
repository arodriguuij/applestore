import { createSelector } from "reselect";

const breadcrumbSelector = (state) => state.breadcrumb;

export const textBreadcrumSelector = createSelector(
  [breadcrumbSelector],
  (breadcrumb) => breadcrumb.text
);
