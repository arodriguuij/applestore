import { createSelector } from "reselect";

const selectCollectionNames = (state) => state.collectionNames;

export const selectCollection = createSelector(
  [selectCollectionNames],
  (collectionNames) => collectionNames.collectionNames
);

export const selectLoading = createSelector(
  [selectCollectionNames],
  (collectionNames) => collectionNames.loading
);

export const selectError = createSelector(
  [selectCollectionNames],
  (collectionNames) => collectionNames.error
);
