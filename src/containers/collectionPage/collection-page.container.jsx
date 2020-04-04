import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCollectionAsyn } from "../../redux/collections/collections.actions";
import Card from "../../components/card/card.component";
import Spinner from "../../components/spinner/spinner.component";
import ErrorPage from "../../components/error-page/error-page";
import "./collection-page.styles.css";

const CollectionPage = (props) => {
  const { onFetchCollectionAsyn } = props;
  const collectionName = props.match.path.substr(1);
  const collectionStateName = props[`collection_${collectionName}`];

  useEffect(() => {
    if (
      Object.keys(collectionStateName).length === 0 &&
      collectionStateName.constructor === Object
    ) {
      console.log("COLLECTION-PAGE sending onFetchCollectionAsyn");
      return onFetchCollectionAsyn(collectionName);
    }
  }, [collectionName, collectionStateName, onFetchCollectionAsyn]);

  let content = <Spinner />;
  if (!props.loading)
    content = collectionStateName ? (
      <div className="collection-page-main">
        {Object.entries(collectionStateName).map(([id, device]) => (
          <div className="collection-page-main-item" key={id}>
            <Card
              {...device}
              id={id}
              collection={collectionName}
              classes="home-page-product"
              click
            />
            <h2>{id}</h2>
          </div>
        ))}
      </div>
    ) : (
      <ErrorPage />
    );

  return content;
};

const mapStateToProps = (state) => ({
  collection_mac: state.collections.collection_mac,
  collection_iphone: state.collections.collection_iphone,
  collection_ipad: state.collections.collection_ipad,
  collection_watch: state.collections.collection_watch,
  loading: state.collections.loading,
  error: state.collections.error,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchCollectionAsyn: (collectionName) =>
    dispatch(fetchCollectionAsyn(collectionName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage);
