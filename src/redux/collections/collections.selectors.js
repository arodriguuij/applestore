import { createSelector } from "reselect";

const selectorCollections = (state) => state.collections;

const selectorCollectionX = (collectionName) =>
  createSelector(
    [selectorCollections],
    (collections) => collections[collectionName]
  );
export const selectorTypesX = (selectorCollectionName) =>
  createSelector(
    [selectorCollectionX(selectorCollectionName)],
    (collection) => collection.types
  );
const selectorItemsAndSubtypesX = (selectorCollectionName) =>
  createSelector(
    [selectorCollectionX(selectorCollectionName)],
    (collection) => collection.itemsAndSubtypes
  );
export const selectorSubtypesX = (selectorItemsAndSubtypesName) =>
  createSelector(
    [selectorItemsAndSubtypesX(selectorItemsAndSubtypesName)],
    (itemsAndSubtypes) => itemsAndSubtypes.subtypes
  );
export const selectorItemsX = (selectorItemsAndSubtypesName) =>
  createSelector(
    [selectorItemsAndSubtypesX(selectorItemsAndSubtypesName)],
    (itemsAndSubtypes) => itemsAndSubtypes.items
  );

export const selectorCollectionLoading = createSelector(
  [selectorCollections],
  (collections) => collections.loading
);
export const selectorCollectionError = createSelector(
  [selectorCollections],
  (collections) => collections.error
);
