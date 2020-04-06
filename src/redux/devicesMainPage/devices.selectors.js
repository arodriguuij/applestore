import { createSelector } from "reselect";

const selectorDevices = (state) => state.devices;

export const selectorTopDevices = createSelector(
  [selectorDevices],
  (mainPage) => mainPage.topDevices
);

const selectorPublicity = createSelector(
  [selectorDevices],
  (devices) => devices.publicity
);

export const selectorPublicityTitle = createSelector(
  [selectorPublicity],
  (publicity) => publicity.title
);

export const selectorPublicityBody = createSelector(
  [selectorPublicity],
  (publicity) => publicity.body
);

export const selectorLoading = createSelector(
  [selectorDevices],
  (devices) => devices.loading
);

export const selectorError = createSelector(
  [selectorDevices],
  (devices) => devices.error
);
