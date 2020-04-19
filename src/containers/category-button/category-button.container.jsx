import { connect } from "react-redux";
import { selectorCollectionByKeyAndNestedKey } from "../../redux/collections/collections.selectors";
import CategoryButton from '../../components/category-button/category-button.component';

const mapStateToProps = (state, ownProps) => ({
  types: selectorCollectionByKeyAndNestedKey(
    `collection_${ownProps.collection}`,
    "types"
  )(state),
  subtypes: selectorCollectionByKeyAndNestedKey(
    `collection_${ownProps.collection}`,
    "subtypes"
  )(state),
});

export default connect(mapStateToProps)(CategoryButton);
