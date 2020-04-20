import { connect } from "react-redux";
import { selectorPageCollectionByKeyAndNedtedKey } from "../../redux/homePageCollections/home-page-collections.selectors";
import ItemsRow from "../../components/items-row/items-row.component";

const mapStateToProps = (state) => ({
  itemsRowBody: selectorPageCollectionByKeyAndNedtedKey(
    "itemsRow",
    "body"
  )(state),
  itemsRowTitle: selectorPageCollectionByKeyAndNedtedKey(
    "itemsRow",
    "title"
  )(state),
});

export default connect(mapStateToProps)(ItemsRow);
