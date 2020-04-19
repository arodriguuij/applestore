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
    else if (!isCollectionItemEmpty && existItemInCollection) {
      return (
        <Fragment>
          <BreadcrumbContainer />
          <div className={"review-page"}>
            <Review
              id={id}
              collection={collection}
              img={existItemInCollection.img}
              name={existItemInCollection.name}
              price={existItemInCollection.price}
              addItem={addItemHandler}
            />
          </div>
        </Fragment>
      );
    } else {
      if (isCollectionActualDeviceFull) {
        return (
          <Fragment>
            <BreadcrumbContainer />
            <div className={"review-page"}>
              <Review
                id={id}
                collection={collection}
                img={collection_actualDevice.img}
                name={collection_actualDevice.name}
                price={collection_actualDevice.price}
                addItem={addItemHandler}
              />
            </div>
          </Fragment>
        );
      }else return null
    }
  };

  return getContent();
};

export default ReviewPage;
