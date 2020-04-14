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

export const selectorMainImageX = (type) =>
  createSelector([selectorType("mainImage")], (mainImage) => mainImage[type]);

export const selectorIsDataEmpty = createSelector(
  [selectorHomePageCollections],
  (homePageCollections) => 
      homePageCollections.mainImage.img === "" &&
      homePageCollections.mainImage.text1 === "" &&
      homePageCollections.mainImage.text2 === "" &&
      homePageCollections.itemsRow.title === "" &&
      homePageCollections.itemsRow.body.length === 0 &&
      homePageCollections.banner.title === "" &&
      homePageCollections.banner.body.length === 0 &&
      homePageCollections.banner.imgMobile === "" &&
      homePageCollections.bannerGrid.title === "" &&
      homePageCollections.bannerGrid.body.length === 0
);
