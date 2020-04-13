import { createSelector } from "reselect";

const selectorCollections = (state) => state.collections;

const selectorCollectionX = (collectionName) =>
  createSelector(
    [selectorCollections],
    (collections) => collections[collectionName]
  );
export const selectorCollectionAndX = (selectorCollectionName, selector) =>
  createSelector(
    [selectorCollectionX(selectorCollectionName)],
    (collection) => collection[selector]
  );

export const selectorCollectionLoading = createSelector(
  [selectorCollections],
  (collections) => collections.loading
);
export const selectorCollectionError = createSelector(
  [selectorCollections],
  (collections) => collections.error
);
