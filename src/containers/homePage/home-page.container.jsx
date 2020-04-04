import React, { useEffect } from "react";
import "./home-page.styles.css";
import Card from "../../components/card/card.component";
import { connect } from "react-redux";
import { fetchDevicesAsyn } from "../../redux/devicesMainPage/devices.actions";
import Spinner from "../../components/spinner/spinner.component";

const HomePage = (props) => {
  const { onFetchDevicesAsyn } = props;
  useEffect(() => {
    onFetchDevicesAsyn();
  }, [onFetchDevicesAsyn]);

  let content = <Spinner />;
  if (!props.loading)
    content = (
      <div className="home-page-main">
        <Card
          key={1}
          click
          {...props.collection_mainPage.mainFirstItem}
          classes="home-page-product home-page-product-special-top"
        />
        <Card
          key={2}
          classes={"home-page-product"}
          {...props.collection_mainPage.itemFirst}
          click
        />
        <Card
          key={3}
          classes={"home-page-product"}
          {...props.collection_mainPage.itemSecond}
          click
        />
        <Card
          key={4}
          classes={"home-page-product"}
          {...props.collection_mainPage.itemThird}
          click
        />
        <Card
          key={5}
          classes={"home-page-product"}
          {...props.collection_mainPage.itemFourth}
          click
        />
        <Card
          key={6}
          click
          {...props.collection_mainPage.mainLastItem}
          classes="home-page-product home-page-product-special-bottom"
        />
      </div>
    );
  return content;
};
//
const mapStateToProps = (state) => ({
  collection_mainPage: state.devices.collection_mainPage,
  loading: state.devices.loading,
  error: state.devices.error,
});
const mapDispatchToProps = (dispatch) => ({
  onFetchDevicesAsyn: () => dispatch(fetchDevicesAsyn()),
});
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
