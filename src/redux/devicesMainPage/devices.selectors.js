import { createSelector } from "reselect";

const selectorDevices = (state) => state.devices;

export const selectorTopItems = createSelector(
  [selectorDevices],
  (mainPage) => mainPage.topItems
);

const selectorBanner = createSelector(
  [selectorDevices],
  (devices) => devices.banner
);

const selectorBannerAccessories = createSelector(
  [selectorDevices],
  (devices) => devices.bannerAccessories
);

export const selectorBannerTitle = createSelector(
  [selectorBanner],
  (banner) => banner.title
);
export const selectorBannerBody = createSelector(
  [selectorBanner],
  (banner) => banner.body
);

export const selectorBannerAccessoriesTitle = createSelector(
  [selectorBannerAccessories],
  (bannerAccessories) => bannerAccessories.title
);
export const selectorBannerAccessoriesBody = createSelector(
  [selectorBannerAccessories],
  (bannerAccessories) => bannerAccessories.body
);

export const selectorLoading = createSelector(
  [selectorDevices],
  (devices) => devices.loading
);
export const selectorError = createSelector(
  [selectorDevices],
  (devices) => devices.error
);
