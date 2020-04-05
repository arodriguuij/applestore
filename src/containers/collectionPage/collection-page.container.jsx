import React, { useEffect, lazy } from "react";
import { connect } from "react-redux";
import { fetchCollectionAsyn } from "../../redux/collections/collections.actions";
import Spinner from "../../components/spinner/spinner.component";
import CardWithDescription from "../../components/card-with-description/card-with-description.component";
import PageContent from "../../components/page-content/page-content.component";
import {
  selectorCollectionMac,
  selectorCollectionIphone,
  selectorCollectionIpad,
  selectorCollectionWatch,
  selectorCollectionLoading,
  selectorCollectionError,
} from "../../redux/collections/collections.selectors";
import "./collection-page.styles.css";
const ErrorPage = lazy(() => import("../../components/error-page/error-page"));

const CollectionPage = (props) => {
  const { onFetchCollectionAsyn, loading, error, match } = props;
  const collectionName = match.path.substr(1);
  const collectionStateName = props[`collection_${collectionName}`];
  const isObjectAndEmpty =
    Object.keys(collectionStateName).length === 0 &&
    collectionStateName.constructor === Object;

  useEffect(() => {
    if (isObjectAndEmpty) return onFetchCollectionAsyn(collectionName);
  }, [collectionName, collectionStateName, onFetchCollectionAsyn]);

  let content = <Spinner />;

  if (!loading)
    content = (
      <PageContent
        classesContainer={"collection-page-container"}
        classesMain={"collection-page-main"}
        text={collectionName}
      >
        {Object.entries(collectionStateName).map(([id, device]) => (
          <CardWithDescription
            key={id}
            id={id}
            collection={collectionName}
            device={device}
          />
        ))}
      </PageContent>
    );

  if (error) content = <ErrorPage text="Something was wrong... Try again :|" />;

  return content;
};

const mapStateToProps = (state) => ({
  collection_mac: selectorCollectionMac(state),
  collection_iphone: selectorCollectionIphone(state),
  collection_ipad: selectorCollectionIpad(state),
  collection_watch: selectorCollectionWatch(state),
  error: selectorCollectionError(state),
  loading: selectorCollectionLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFetchCollectionAsyn: (collectionName) =>
    dispatch(fetchCollectionAsyn(collectionName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage);
