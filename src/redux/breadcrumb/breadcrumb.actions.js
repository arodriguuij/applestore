import breadcrumbActionTypes from "./breadcrumb.types";

export const setBreadcrumb = (text) => {
  return {
    type: breadcrumbActionTypes.SET_BREADCRUMB,
    payload: {
      text: text,
    },
  };
};
