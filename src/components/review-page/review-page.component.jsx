import React, { Fragment, lazy } from "react";
import BreadcrumbContainer from "../../containers/breadcrumb/breadcrumb.container";
import Review from "../../components/review-box/review-box.components";
import Spinner from "../../components/spinner/spinner.component";
import "./review-page.styles.css";
const ErrorPage = lazy(() =>
  import("../../components/error-page/error-page.component")
);

const ReviewPage = ({
  isCollectionItemEmpty,
  existItemInCollection,
  id,
  collection,
  addItemHandler,
  collection_actualDevice,
  isCollectionActualDeviceFull,
  loading,
  error,
}) => {
  const getContent = () => {
    if (loading) return <Spinner />;
    else if (error) return <ErrorPage text={error} />;
    else
      return (
        <Fragment>
          <BreadcrumbContainer />
          <div className={"review-page"}>
            {!isCollectionItemEmpty && existItemInCollection ? (
              <Review
                id={id}
                collection={collection}
                img={existItemInCollection.img}
                name={existItemInCollection.name}
                price={existItemInCollection.price}
                addItem={addItemHandler}
              />
            ) : isCollectionActualDeviceFull ? (
              <Review
                id={id}
                collection={collection}
                img={collection_actualDevice.img}
                name={collection_actualDevice.name}
                price={collection_actualDevice.price}
                addItem={addItemHandler}
              />
            ) : null}
          </div>
        </Fragment>
      );
  };

  return getContent();
};

export default ReviewPage;
