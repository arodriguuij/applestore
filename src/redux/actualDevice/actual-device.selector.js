import { createSelector } from "reselect";

const selectorActualDeviceState = (state) => state.actualDevice;

export const selectorActualDeviceByKey = (type) =>
  createSelector(
    [selectorActualDeviceState],
    (actualDevice) => actualDevice[type]
  );
