import { createSelector } from "reselect";

const selectorActualDevice = (state) => state.actualDevice;

export const selectorActualDeviceX = (type) => createSelector(
  [selectorActualDevice],
  (selectorActualDevice) => selectorActualDevice[type]
);