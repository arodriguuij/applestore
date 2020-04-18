import React, { Fragment } from "react";
import ItemsRow from "../items-row/items-row.container";
import CardsGrid from "../cards-grid/cards-grid.component";
import MainImage from "../../components/main-image/main-image.component";
import MobileImageFull from "../../components/mobile-full-image/mobile-full-image.component";

const HomePage = () => {
  return (
    <Fragment>
      <MainImage />
      <ItemsRow />
      <CardsGrid />
      <MobileImageFull />
    </Fragment>
  );
};

export default HomePage;
