import { createSelector } from "reselect";

const selectorHomePageCollections = (state) => state.homePageCollections;

export const selectorType = (type) =>
  createSelector(
    [selectorHomePageCollections],
    (homePageCollections) => homePageCollections[type]
  );

export const selectorXtitle = (type) =>
  createSelector([selectorType(type)], (type) => type.title);
export const selectorXbody = (type) =>
  createSelector([selectorType(type)], (type) => type.body);

export const selectorBannerImgMoblie = (type) =>
  createSelector([selectorType(type)], (banner) => banner.imgMobile);
