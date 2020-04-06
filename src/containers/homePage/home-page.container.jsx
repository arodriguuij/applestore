import React, { useEffect, lazy, Fragment } from "react";
import "./home-page.styles.css";
import Card from "../../components/card/card.component";
import { connect } from "react-redux";
import { fetchDevicesAsyn } from "../../redux/devicesMainPage/devices.actions";
import Spinner from "../../components/spinner/spinner.component";
import { setBreadcrumb } from "../../redux/breadcrumb/breadcrumb.actions";
import {
  selectorTopDevices,
  selectorPublicityTitle,
  selectorPublicityBody,
  selectorLoading,
  selectorError,
} from "../../redux/devicesMainPage/devices.selectors";
const ErrorPage = lazy(() => import("../../components/error-page/error-page"));

const HomePage = ({
  topDevices,
  loading,
  error,
  onFetchDevicesAsyn,
  onSetBreadcrumb,
  publicityTitle,
  publicityBody,
}) => {
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
        <div className={"home-page-top"}>
          {topDevices.map((device, index) => (
            <div key={index}>
              <Card classes={"home-page-product"} {...device} clickable />
              <p>{device.name}</p>
            </div>
          ))}
        </div>
        <div className={"home-page-medium"}>
          <div><h2 className={"home-page-medium-title"}>{publicityTitle}</h2></div>
          <div className={"home-page-medium-bottom"}>
          {publicityBody.map((item, index) => (
            <div key={index}>
              <Card classes={"home-page-product"} {...item} />
              <p className={"home-page-medium-bottom-description"}>{item.description}</p>
            </div>
          ))}
          </div>
        </div>
      </Fragment>
    );
  if (error) content = <ErrorPage text="Something was wrong... Try again :|" />;

  return <div>{content}</div>;
};

const mapStateToProps = (state) => ({
  topDevices: selectorTopDevices(state),
  publicityTitle: selectorPublicityTitle(state),
  publicityBody: selectorPublicityBody(state),
  loading: selectorLoading(state),
  error: selectorError(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFetchDevicesAsyn: () => dispatch(fetchDevicesAsyn()),
  onSetBreadcrumb: (text) => dispatch(setBreadcrumb(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
