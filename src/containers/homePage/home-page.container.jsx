import React, { useEffect, lazy, Fragment } from "react";
import "./home-page.styles.css";
import { connect } from "react-redux";
import { fetchHomePageCollectionsAsyn } from "../../redux/homePageCollections/homePageCollections.actions";
import Spinner from "../../components/spinner/spinner.component";
import ItemsRow from "../../components/items-row/items-row.component";
import Banner from "../../components/banner/banner.component";
import BannerGrid from "../../components/banner-grid/banner-grid.component";
import MainImage from "../../components/main-image/main-image.component";
import {
  selectorXtitle,
  selectorXbody,
  selectorType,
  selectorBannerImgMoblie,
} from "../../redux/homePageCollections/homePageCollections.selectors";

const ErrorPage = lazy(() => import("../../components/error-page/error-page"));

const HomePage = ({
  loading,
  error,
  onFetchHomePageCollectionsAsyn,
  bannerTitle,
  bannerBody,
  bannerImgMoblie,
  bannerGridTitle,
  bannerGridBody,
  itemsRowTitle,
  itemsRowBody,
  mainImage,
}) => {
  const isEmptyData =
    mainImage === "" &&
    bannerTitle === "" &&
    bannerGridTitle === "" &&
    itemsRowTitle === "" &&
    bannerBody.length === 0 &&
    bannerGridBody.length === 0 &&
    itemsRowBody.length === 0;

  useEffect(() => {
    if (isEmptyData) onFetchHomePageCollectionsAsyn();
  }, [onFetchHomePageCollectionsAsyn, isEmptyData]);

  let content = <Spinner />;
  if (!loading)
    content = (
      <Fragment>
        <MainImage />
        <ItemsRow />
        <BannerGrid />
        <img alt="item" className="bannerMobile" src={bannerImgMoblie} />
        <Banner />
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
  mainImage: selectorType("mainImage")(state),
  loading: selectorType("loading")(state),
  error: selectorType("error")(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFetchHomePageCollectionsAsyn: () =>
    dispatch(fetchHomePageCollectionsAsyn()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
