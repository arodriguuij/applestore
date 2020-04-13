import React, { useEffect, lazy, Fragment } from "react";
import { connect } from "react-redux";
import { fetchHomePageCollectionsAsyn } from "../../redux/homePageCollections/homePageCollections.actions";
import ItemsRow from "../../components/items-row/items-row.component";
import CardsGrid from "../../components/cards-grid/cards-grid.component";
import MainImage from "../../components/main-image/main-image.component";
import {
  selectorXtitle,
  selectorXbody,
  selectorType,
  selectorMainImageX,
  selectorBannerImgMoblie,
} from "../../redux/homePageCollections/homePageCollections.selectors";
import "./home-page.styles.css";

const ErrorPage = lazy(() => import("../../components/error-page/error-page"));

const HomePage = ({
  error,
  onFetchHomePageCollectionsAsyn,
  bannerTitle,
  bannerBody,
  bannerImgMoblie,
  bannerGridTitle,
  bannerGridBody,
  itemsRowTitle,
  itemsRowBody,
  mainImageImg,
  mainImageText1,
  mainImageText2,
}) => {
  const isEmptyData =
    mainImageImg === "" &&
    mainImageText1 === "" &&
    mainImageText2 === "" &&
    bannerTitle === "" &&
    bannerGridTitle === "" &&
    itemsRowTitle === "" &&
    bannerBody.length === 0 &&
    bannerGridBody.length === 0 &&
    itemsRowBody.length === 0;

  useEffect(() => {
    if (isEmptyData) onFetchHomePageCollectionsAsyn();
  }, [onFetchHomePageCollectionsAsyn, isEmptyData]);

  let content = (
    <Fragment>
      <MainImage />
      <ItemsRow />
      <CardsGrid />
      <img alt="item" className="bannerMobile" src={bannerImgMoblie} />
    </Fragment>
  );
  if (error) content = <ErrorPage text="Something was wrong... Try again :|" />;

  return content;
};

const mapStateToProps = (state) => ({
  bannerTitle: selectorXtitle("banner")(state),
  bannerBody: selectorXbody("banner")(state),
  bannerImgMoblie: selectorBannerImgMoblie("banner")(state),
  bannerGridTitle: selectorXtitle("bannerGrid")(state),
  bannerGridBody: selectorXbody("bannerGrid")(state),
  itemsRowTitle: selectorXtitle("itemsRow")(state),
  itemsRowBody: selectorXbody("itemsRow")(state),
  mainImageImg: selectorMainImageX("img")(state),
  mainImageText1: selectorMainImageX("text1")(state),
  mainImageText2: selectorMainImageX("text2")(state),
  error: selectorType("error")(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFetchHomePageCollectionsAsyn: () =>
    dispatch(fetchHomePageCollectionsAsyn()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
