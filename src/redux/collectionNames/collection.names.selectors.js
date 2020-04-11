import { createSelector } from "reselect";

const selectCollectionNames = (state) => state.collectionNames;

export const selectCollectionNamesX = (type) => createSelector(
  [selectCollectionNames],
  (collectionNames) => collectionNames[type]
);