import React, { Fragment, lazy } from "react";
import ItemsRowContainer from "../../containers/items-row/items-row.container";
import CardsGridContainer from "../../containers/cards-grid/cards-grid.container";
import MainImageContainer from "../../containers/main-image/main-image.container";
import MobileImageFullContainer from "../../containers/mobile-full-image/mobile-full-image.container";
import Spinner from "../../components/spinner/spinner.component";

const ErrorPage = lazy(() =>
  import("../../components/error-page/error-page.component")
);

const HomePage = ({loading, error}) => {
  const getContent = () => {
    if (loading) return <Spinner />;
    else if (error)
      return <ErrorPage text="Houston, the main page is lost... " />;
    else
      return (
        <Fragment>
          <MainImageContainer />
          <ItemsRowContainer />
          <CardsGridContainer />
          <MobileImageFullContainer />
        </Fragment>
      );
  };

  return getContent();
};

export default HomePage;
