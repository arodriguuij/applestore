import { createSelector } from "reselect";

const collectionNamesSelectorState = (state) => state.collectionNames;

export const selectorCollectionNamesByKey = (type) =>
  createSelector(
    [collectionNamesSelectorState],
    (collectionNames) => collectionNames[type]
  );
