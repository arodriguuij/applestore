import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCollectionAsyn } from "../../redux/collections/collections.actions";
import Spinner from "../../components/spinner/spinner.component";
import ErrorPage from "../../components/error-page/error-page";
import CardWithDescription from "../../components/card-with-description/card-with-description.component";
import PageContent from "../../components/page-content/page-content.component";
import "./collection-page.styles.css";

const CollectionPage = (props) => {
  const { onFetchCollectionAsyn } = props;
  const collectionName = props.match.path.substr(1);
  const collectionStateName = props[`collection_${collectionName}`];

  useEffect(() => {
    if (
      Object.keys(collectionStateName).length === 0 &&
      collectionStateName.constructor === Object
    )
      return onFetchCollectionAsyn(collectionName);
  }, [collectionName, collectionStateName, onFetchCollectionAsyn]);

  let content = <Spinner />;

  if (!props.loading)
    content = collectionStateName ? (
      <PageContent
        classesContainer={"collection-page-container"}
        classesMain={"collection-page-main"}
        text={collectionName}
      >
        {Object.entries(collectionStateName).map(([id, device]) => (
          <CardWithDescription
            key={id}
            id={id}
            device={device}
            collection={collectionName}
          />
        ))}
      </PageContent>
    ) : (
      <ErrorPage /> //TODO: test if can arrive here
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
