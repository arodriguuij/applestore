import React, { useEffect, Fragment } from "react";
import "./home-page.styles.css";
import Card from "../../components/card/card.component";
import { connect } from "react-redux";
import { fetchDevicesAsyn } from "../../redux/devicesMainPage/devices.actions";
import Spinner from "../../components/spinner/spinner.component";
import Breadcrumb from '../../components/breadcrumb/breadcrumb.component';

const HomePage = (props) => {
  const { onFetchDevicesAsyn } = props;
  useEffect(() => {
    onFetchDevicesAsyn();
  }, [onFetchDevicesAsyn]);

  let content = <Spinner />;
  if (!props.loading)
    content = (
      <Fragment>
        <Breadcrumb text={'Welcome to Apple'}/>
        <div className="home-page-main">
          {props.collection_mainPage.map((device, index, collection_mainPage) =>
            index === 0 ? (
              <Card
                key={index}
                click
                {...device}
                classes="home-page-product home-page-product-special-top"
              />
            ) : index === collection_mainPage.length - 1 ? (
              <Card
                key={index}
                click
                {...device}
                classes="home-page-product home-page-product-special-bottom"
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
  return content;
};

const mapStateToProps = (state) => ({
  collection_mainPage: state.devices.collection_mainPage,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchDevicesAsyn: () => dispatch(fetchDevicesAsyn()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
