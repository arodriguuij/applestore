import React, { Fragment, lazy } from "react";
import Card from "../card/card.components";
import BreadcrumbContainer from "../../containers/breadcrumb/breadcrumb.container";
import Spinner from "../../components/spinner/spinner.component";
import "./collection-page.styles.css";
import CategoryButtonContainer from "../../containers/category-button/category-button.container";

const ErrorPage = lazy(() =>
  import("../../components/error-page/error-page.component")
);

const CollectionPage = ({
  collection,
  collectionStateName,
  loading,
  error,
  type,
  subtype,
  clickTypeHandler,
  clickSubtypeHandler,
}) => {
  const getContent = () => {
    if (error) return <ErrorPage text="Something was wrong... Try again :|" />;
    else if (loading) return <Spinner />;
    else
      return (
        <Fragment>
          <BreadcrumbContainer />
          <div className="item-collection-page">
            <CategoryButtonContainer
              collection={collection}
              action={(type) => clickTypeHandler(type)}
              actual={type}
              typeButton={"types"}
            />
            <CategoryButtonContainer
              collection={collection}
              action={(subtype) => clickSubtypeHandler(subtype)}
              actual={subtype}
              typeButton={"subtypes"}
            />
            <div className="collection-page-items">
              {Object.entries(collectionStateName)
                .filter(
                  ([id, device]) => device.type === type || type === "all"
                )
                .filter(
                  ([id, device]) =>
                    device.subtype === subtype || subtype === "all"
                )
                .map(([id, device]) => (
                  <Card key={id} id={id} collection={collection} {...device} />
                ))}
            </div>
          </div>
        </Fragment>
      );
  };

  return getContent();
};

export default CollectionPage;
