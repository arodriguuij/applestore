import { createSelector } from "reselect";

const selectorActualDevice = (state) => state.actualDevice;

export const selectorCollectionActualDevice = createSelector(
  [selectorActualDevice],
  (selectorActualDevice) => selectorActualDevice.collection_actualDevice
);

export const selectorLoading = createSelector(
  [selectorActualDevice],
  (selectorActualDevice) => selectorActualDevice.loading
);

export const selectorError = createSelector(
  [selectorActualDevice],
  (selectorActualDevice) => selectorActualDevice.error
);
