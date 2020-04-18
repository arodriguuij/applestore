import { createSelector } from "reselect";

const homePageCollectionsSelectorState = (state) => state.homePageCollections;

export const selectorHomePageCollectionByKey = (key) =>
  createSelector(
    [homePageCollectionsSelectorState],
    (homePageCollections) => homePageCollections[key]
  );

export const selectorPageCollectionByKeyAndNedtedKey = (key, nestedKey) =>
  createSelector(
    [selectorHomePageCollectionByKey(key)],
    (key) => key[nestedKey]
  );

export const selectorIsDataEmpty = createSelector(
  [homePageCollectionsSelectorState],
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
