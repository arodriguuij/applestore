import { createSelector } from "reselect";

const selectorDevices = (state) => state.devices;

export const selectorCollectionMainPage = createSelector(
  [selectorDevices],
  (devices) => devices.collection_mainPage
);

export const selectorLoading = createSelector(
  [selectorDevices],
  (devices) => devices.loading
);

export const selectorError = createSelector(
  [selectorDevices],
  (devices) => devices.error
);
