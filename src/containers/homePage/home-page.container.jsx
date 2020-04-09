import React, { useEffect, lazy, Fragment } from "react";
import "./home-page.styles.css";
import { connect } from "react-redux";
import { fetchDevicesAsyn } from "../../redux/devicesMainPage/devices.actions";
import Spinner from "../../components/spinner/spinner.component";
import { setBreadcrumb } from "../../redux/breadcrumb/breadcrumb.actions";
import ItemsRow from "../../components/items-row/items-row.component";
import Banner from "../../components/banner/banner.component";
import BannerGrid from "../../components/banner-grid/banner-grid.component";
import MainImage from "../../components/main-image/main-image.component";
import {
  selectorBannerTitle,
  selectorBannerBody,
  selectorBannerGridTitle,
  selectorBannerGridBody,
  selectorLoading,
  selectorError,
  selectorItemsRowTitle,
  selectorItemsRowBody,
  selectorMainImage,
} from "../../redux/devicesMainPage/devices.selectors";
const ErrorPage = lazy(() => import("../../components/error-page/error-page"));

const HomePage = ({
  loading,
  error,
  onFetchDevicesAsyn,
  onSetBreadcrumb,
  bannerTitle,
  bannerBody,
  bannerGridTitle,
  bannerGridBody,
  itemsRowTitle,
  itemsRowBody,
  mainImage,
}) => {
  useEffect(() => {
    if (
      mainImage === "" &&
      bannerTitle === "" &&
      bannerGridTitle === "" &&
      itemsRowTitle === "" &&
      bannerBody.length === 0 &&
      bannerGridBody.length === 0 &&
      itemsRowBody.length === 0
    )
      onFetchDevicesAsyn();
  }, [
    onFetchDevicesAsyn,
    bannerTitle,
    bannerBody,
    bannerGridTitle,
    bannerGridBody,
    itemsRowTitle,
    itemsRowBody,
    mainImage
  ]);

  useEffect(() => {
    onSetBreadcrumb("");
  }, [onSetBreadcrumb, itemsRowTitle]);

  let content = <Spinner />;
  if (!loading)
    content = (
      <Fragment>
        <MainImage />
        <ItemsRow />
        <BannerGrid />
        <Banner />
      </Fragment>
    );
  if (error) content = <ErrorPage text="Something was wrong... Try again :|" />;

  return content;
};

const mapStateToProps = (state) => ({
  bannerTitle: selectorBannerTitle(state),
  bannerBody: selectorBannerBody(state),
  bannerGridTitle: selectorBannerGridTitle(state),
  bannerGridBody: selectorBannerGridBody(state),
  itemsRowTitle: selectorItemsRowTitle(state),
  itemsRowBody: selectorItemsRowBody(state),
  mainImage: selectorMainImage(state),
  loading: selectorLoading(state),
  error: selectorError(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFetchDevicesAsyn: () => dispatch(fetchDevicesAsyn()),
  onSetBreadcrumb: (text) => dispatch(setBreadcrumb(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
