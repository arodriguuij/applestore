import React, { Fragment } from "react";
import Breadcrumb from "../../components/breadcrumb/breadcrumb.component";
import Review from "../../components/review-box/review-box.components";
import "./review-page.styles.css";

const ItemPage = ({
  isCollectionItemEmpty,
  existItemInCollection,
  id,
  collection,
  addItemHandler,
  collection_actualDevice,
  isCollectionActualDeviceFull,
}) => {

  let content;
  if (!isCollectionItemEmpty && existItemInCollection) {
    content = (
      <Review
        id={id}
        collection={collection}
        img={existItemInCollection.img}
        name={existItemInCollection.name}
        price={existItemInCollection.price}
        addItem={addItemHandler}
      />
    );
  } else {
    if (isCollectionActualDeviceFull) {
      content = (
        <Review
          id={id}
          collection={collection}
          img={collection_actualDevice.img}
          name={collection_actualDevice.name}
          price={collection_actualDevice.price}
          addItem={addItemHandler}
        />
      );
    }
  }

  return (
    <Fragment>
      <Breadcrumb />
      <div className={"review-page"}>{content}</div>
    </Fragment>
  );
};

export default ItemPage;
