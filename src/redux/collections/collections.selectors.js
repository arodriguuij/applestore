import { createSelector } from "reselect";

const collectionSelectorState = (state) => state.collections;

export const selectorCollectionByKey = (collectionName) =>
  createSelector(
    [collectionSelectorState],
    (collections) => collections[collectionName]
  );
export const selectorCollectionByKeyAndNestedKey = (
  selectorCollectionName,
  selector
) =>
  createSelector(
    [selectorCollectionByKey(selectorCollectionName)],
    (collection) => collection[selector]
  );
