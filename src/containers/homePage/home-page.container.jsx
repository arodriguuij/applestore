import React, { useEffect, lazy, Fragment } from "react";
import "./home-page.styles.css";
import { connect } from "react-redux";
import { fetchDevicesAsyn } from "../../redux/devicesMainPage/devices.actions";
import Spinner from "../../components/spinner/spinner.component";
import { setBreadcrumb } from "../../redux/breadcrumb/breadcrumb.actions";
import TopDevices from "../../components/top-devices/top-devices.component";
import Banner from "../../components/banner/banner.component";
import {
  selectorLoading,
  selectorError,
} from "../../redux/devicesMainPage/devices.selectors";
const ErrorPage = lazy(() => import("../../components/error-page/error-page"));

const HomePage = ({ loading, error, onFetchDevicesAsyn, onSetBreadcrumb }) => {
  useEffect(() => {
    onFetchDevicesAsyn();
  }, [onFetchDevicesAsyn]);

  useEffect(() => {
    onSetBreadcrumb("Top products");
  }, [onSetBreadcrumb]);

  let content = <Spinner />;
  if (!loading)
    content = (
      <Fragment>
        <TopDevices />
        <Banner />
      </Fragment>
    );
  if (error) content = <ErrorPage text="Something was wrong... Try again :|" />;

  return content;
};

const mapStateToProps = (state) => ({
  loading: selectorLoading(state),
  error: selectorError(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFetchDevicesAsyn: () => dispatch(fetchDevicesAsyn()),
  onSetBreadcrumb: (text) => dispatch(setBreadcrumb(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
