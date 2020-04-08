import { createSelector } from "reselect";

const selectorDevices = (state) => state.devices;

const selectorItemsRow = createSelector(
  [selectorDevices],
  (devices) => devices.itemsRow
);
export const selectorItemsRowTitle = createSelector(
  [selectorItemsRow],
  (itemsRow) => itemsRow.title
);
export const selectorItemsRowBody = createSelector(
  [selectorItemsRow],
  (itemsRow) => itemsRow.body
);


const selectorBanner = createSelector(
  [selectorDevices],
  (devices) => devices.banner
);
export const selectorBannerTitle = createSelector(
  [selectorBanner],
  (banner) => banner.title
);
export const selectorBannerBody = createSelector(
  [selectorBanner],
  (banner) => banner.body
);


const selectorBannerGrid = createSelector(
  [selectorDevices],
  (devices) => devices.bannerGrid
);
export const selectorBannerGridTitle = createSelector(
  [selectorBannerGrid],
  (bannerGrid) => bannerGrid.title
);
export const selectorBannerGridBody = createSelector(
  [selectorBannerGrid],
  (bannerGrid) => bannerGrid.body
);



export const selectorMainImage = createSelector(
  [selectorDevices],
  (devices) => devices.mainImage
);
export const selectorLoading = createSelector(
  [selectorDevices],
  (devices) => devices.loading
);
export const selectorError = createSelector(
  [selectorDevices],
  (devices) => devices.error
);
