import React, { Fragment, useState, lazy } from "react";
import Card from "../card/card.components";
import CategoryButtons from "../category-buttons/category-buttons.component";
import BreadcrumbContainer from "../../containers/breadcrumb/breadcrumb.container";
import Spinner from "../../components/spinner/spinner.component";
import "./collection-page.styles.css";

const ErrorPage = lazy(() =>
  import("../../components/error-page/error-page.component")
);

const CollectionPage = ({
  collection,
  collectionStateName,
  loading,
  error,
}) => {
  const [type, setType] = useState("all");
  const [subtype, setSubtype] = useState("all");

  const clickTypeHandler = (type) => {
    setType(type);
  };
  const clickSubtypeHandler = (subtype) => {
    setSubtype(subtype);
  };

  const getContent = () => {
    if (error) return <ErrorPage text="Something was wrong... Try again :|" />;
    else if (loading) return <Spinner />;
    else
      return (
        <Fragment>
          <BreadcrumbContainer />
          <div className="item-collection-page">
            <CategoryButtons
              actualType={type}
              actualSubtype={subtype}
              actionTypes={(type) => clickTypeHandler(type)}
              actionSubtypes={(subtype) => clickSubtypeHandler(subtype)}
              collection={collection}
            />
            <div className="collection-page-items">
              {Object.entries(collectionStateName)
                .filter(
                  ([id, device]) =>
                    device.type === type || type === "all"
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
