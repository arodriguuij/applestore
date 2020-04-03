import React from "react";
import { Route } from "react-router";
import CollectionPage from "../collectionPage/collection-page.container";
import DetailsPage from "../detailsPage/details-page.container";

const ShopPage = props => {
  return (
    <div>
      <Route
        path={`/${props.match.params.pathParam1}/${props.match.params.pathParam2}`}
        component={DetailsPage}
      />
      <Route
        path={`/${props.match.params.pathParam2}`}
        component={CollectionPage}
      />
    </div>
  );
};

export default ShopPage;
