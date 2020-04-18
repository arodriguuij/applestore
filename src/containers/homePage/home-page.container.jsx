import React, { useEffect, lazy, Fragment } from "react";
import { connect } from "react-redux";
import { fetchHomePageCollectionsStart } from "../../redux/homePageCollections/home-page-collections.actions";
import ItemsRow from "../items-row/items-row.container";
import CardsGrid from "../cards-grid/cards-grid.container";
import MainImage from "../../components/main-image/main-image.component";
import MobileImageFull from "../../components/mobile-full-image/mobile-full-image.component";
import {
  selectorHomePageCollectionByKey,
  selectorPageCollectionByKeyAndNedtedKey,
  selectorIsDataEmpty,
} from "../../redux/homePageCollections/home-page-collections.selectors";

const ErrorPage = lazy(() => import("../../components/error-page/error-page.component"));

const HomePage = ({
  error,
  onFetchHomePageCollectionsStart,
  bannerImgMoblie,
  isDataEmpty,
  img,
  text1,
  text2,
}) => {
  useEffect(() => {
    if (isDataEmpty) onFetchHomePageCollectionsStart();
  }, [onFetchHomePageCollectionsStart, isDataEmpty]);

  let content = (
    <Fragment>
      <MainImage img={img} text1={text1} text2={text2} />
      <ItemsRow />
      <CardsGrid />
      <MobileImageFull img={bannerImgMoblie} />
    </Fragment>
  );
  if (error) content = <ErrorPage text="Something was wrong... Try again :|" />;

  return content;
};

const mapStateToProps = (state) => ({
  isDataEmpty: selectorIsDataEmpty(state),
  img: selectorPageCollectionByKeyAndNedtedKey("mainImage", "img")(state),
  text1: selectorPageCollectionByKeyAndNedtedKey("mainImage", "text1")(state),
  text2: selectorPageCollectionByKeyAndNedtedKey("mainImage", "text2")(state),
  bannerImgMoblie: selectorPageCollectionByKeyAndNedtedKey(
    "banner",
    "imgMobile"
  )(state),
  error: selectorHomePageCollectionByKey("error")(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFetchHomePageCollectionsStart: () =>
    dispatch(fetchHomePageCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
