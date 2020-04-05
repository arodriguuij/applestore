import { createSelector } from "reselect";

const selectorCollections = (state) => state.collections;

export const selectorCollectionMac = createSelector(
  [selectorCollections],
  (collections) => collections.collection_mac
);
export const selectorCollectionIphone = createSelector(
  [selectorCollections],
  (collections) => collections.collection_iphone
);
export const selectorCollectionIpad = createSelector(
  [selectorCollections],
  (collections) => collections.collection_ipad
);
export const selectorCollectionWatch = createSelector(
  [selectorCollections],
  (collections) => collections.collection_watch
);
export const selectorCollectionLoading = createSelector(
  [selectorCollections],
  (collections) => collections.loading
);
export const selectorCollectionError = createSelector(
  [selectorCollections],
  (collections) => collections.error
);
