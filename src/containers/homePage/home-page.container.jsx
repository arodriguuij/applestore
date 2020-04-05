import React, { useEffect, Fragment, lazy } from "react";
import "./home-page.styles.css";
import Card from "../../components/card/card.component";
import { connect } from "react-redux";
import { fetchDevicesAsyn } from "../../redux/devicesMainPage/devices.actions";
import Spinner from "../../components/spinner/spinner.component";
import Breadcrumb from "../../components/breadcrumb/breadcrumb.component";
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
}) => {
  useEffect(() => {
    onFetchDevicesAsyn();
  }, [onFetchDevicesAsyn]);

  let content = <Spinner />;
  if (!loading)
    content = (
      <Fragment>
        <Breadcrumb text={"Welcome to Apple"} />
        <div className="home-page-main">
          {collection_mainPage.map((device, index, collection_mainPage) =>
            index === 0 ? (
              <Card
                key={index}
                classes="home-page-product home-page-product-special-top"
                {...device}
                click
              />
            ) : index === collection_mainPage.length - 1 ? (
              <Card
                key={index}
                classes="home-page-product home-page-product-special-bottom"
                {...device}
                click
              />
            ) : (
              <Card
                key={index}
                classes={"home-page-product"}
                {...device}
                click
              />
            )
          )}
        </div>
      </Fragment>
    );
  if (error) content = <ErrorPage text="Something was wrong... Try again :|" />;
  return content;
};

const mapStateToProps = (state) => ({
  collection_mainPage: selectorCollectionMainPage(state),
  loading: selectorLoading(state),
  error: selectorError(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFetchDevicesAsyn: () => dispatch(fetchDevicesAsyn()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
