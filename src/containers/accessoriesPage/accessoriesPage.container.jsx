import React, { useEffect, Fragment, useState } from "react";
import "./accessoriesPage.styles.css";
import { connect } from "react-redux";
import { selectorCollectionAccessories } from "../../redux/collections/collections.selectors";
import CardGrid from "../../components/card-grid/card-grid.components";
import { fetchCollectionAsyn } from "../../redux/collections/collections.actions";
import { setBreadcrumb } from "../../redux/breadcrumb/breadcrumb.actions";
import CategoryButtons from "../../components/category-buttons/category-buttons.component";

const AccessoriesPage = ({
  accesories,
  onFetchCollectionAsyn,
  onSetBreadcrumb,
}) => {
  const isObjectAndEmpty =
    Object.keys(accesories).length === 0 && accesories.constructor === Object;

  const [category, setCategory] = useState("all");

  useEffect(() => {
    if (isObjectAndEmpty) return onFetchCollectionAsyn("accessories");
  }, [onFetchCollectionAsyn, isObjectAndEmpty]);

  useEffect(() => {
    onSetBreadcrumb("accesories");
  }, [onSetBreadcrumb, "accesories"]);

  const clickCategoryHandler = (category) => {
    setCategory(category);
  };

  return (
    <Fragment>
      <CategoryButtons
        actual={category}
        action={(category) => clickCategoryHandler(category)}
      />

      <div className="accesories">
        {Object.entries(accesories).map(([id, device]) => {
            if(device.type === category || category === 'all')
             return(<CardGrid key={id} id={id} collection="accessories" {...device} />)
        })}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  accesories: selectorCollectionAccessories(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFetchCollectionAsyn: (collectionName) =>
    dispatch(fetchCollectionAsyn(collectionName)),
  onSetBreadcrumb: (text) => dispatch(setBreadcrumb(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccessoriesPage);
