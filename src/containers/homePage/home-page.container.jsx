import React, { useEffect, lazy, Fragment } from "react";
import { connect } from "react-redux";
import { fetchHomePageCollectionsAsyn } from "../../redux/homePageCollections/homePageCollections.actions";
import ItemsRow from "../items-row/items-row.container";
import CardsGrid from "../cards-grid/cards-grid.container";
import MainImage from "../../components/main-image/main-image.component";
import MobileImageFull from "../../components/mobile-full-image/mobile-full-image.component";
import {
  selectorType,
  selectorBannerImgMoblie,
  selectorIsDataEmpty,
  selectorMainImageX
} from "../../redux/homePageCollections/homePageCollections.selectors";
import "./home-page.styles.css";

const ErrorPage = lazy(() => import("../../components/error-page/error-page"));

const HomePage = ({
  error,
  onFetchHomePageCollectionsAsyn,
  bannerImgMoblie,
  isDataEmpty,
  img,
  text1,
  text2
}) => {
  useEffect(() => {
    if (isDataEmpty) onFetchHomePageCollectionsAsyn();
  }, [onFetchHomePageCollectionsAsyn, isDataEmpty]);

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
  img: selectorMainImageX("img")(state),
  text1: selectorMainImageX("text1")(state),
  text2: selectorMainImageX("text2")(state),
  bannerImgMoblie: selectorBannerImgMoblie("banner")(state),
  error: selectorType("error")(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFetchHomePageCollectionsAsyn: () =>
    dispatch(fetchHomePageCollectionsAsyn()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
