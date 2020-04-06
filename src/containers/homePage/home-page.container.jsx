import React, { useEffect, lazy, Fragment } from "react";
import "./home-page.styles.css";
import Card from "../../components/card/card.component";
import { connect } from "react-redux";
import { fetchDevicesAsyn } from "../../redux/devicesMainPage/devices.actions";
import Spinner from "../../components/spinner/spinner.component";
import { setBreadcrumb } from "../../redux/breadcrumb/breadcrumb.actions";
import {
  selectorCollectionMainPage,
  selectorLoading,
  selectorError,
} from "../../redux/devicesMainPage/devices.selectors";
const ErrorPage = lazy(() => import("../../components/error-page/error-page"));

const HomePage = ({
  collection_mainPage,
  loading,
  error,
  onFetchDevicesAsyn,
  onSetBreadcrumb,
}) => {
  useEffect(() => {
    onFetchDevicesAsyn();
  }, [onFetchDevicesAsyn]);

  useEffect(() => {
    onSetBreadcrumb("Welcome to Apple");
  }, [onSetBreadcrumb]);

  let content = <Spinner />;
  if (!loading)
    content = (
      <Fragment>
        {collection_mainPage.map((device, index, collection_mainPage) =>
          index === 0 ? (
            <Card
              key={index}
              classes="home-page-product home-page-product-special-top"
              {...device}
              clickable
            />
          ) : index === collection_mainPage.length - 1 ? (
            <Card
              key={index}
              classes="home-page-product home-page-product-special-bottom"
              {...device}
              clickable
            />
          ) : (
            <Card
              key={index}
              classes={"home-page-product"}
              {...device}
              clickable
            />
          )
        )}
      </Fragment>
    );
  if (error) content = <ErrorPage text="Something was wrong... Try again :|" />;

  return <div className={"home-page"}>{content}</div>;
};

const mapStateToProps = (state) => ({
  collection_mainPage: selectorCollectionMainPage(state),
  loading: selectorLoading(state),
  error: selectorError(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFetchDevicesAsyn: () => dispatch(fetchDevicesAsyn()),
  onSetBreadcrumb: (text) => dispatch(setBreadcrumb(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
