import { connect } from "react-redux";
import { selectorPageCollectionByKeyAndNedtedKey } from "../../redux/homePageCollections/home-page-collections.selectors";
import CardsGrid from '../../components/cards-grid/cards-grid.component';

const mapStateToProps = (state) => ({
  bannerGridTitle: selectorPageCollectionByKeyAndNedtedKey(
    "bannerGrid",
    "title"
  )(state),
  bannerGridBody: selectorPageCollectionByKeyAndNedtedKey(
    "bannerGrid",
    "body"
  )(state),
});

export default connect(mapStateToProps)(CardsGrid);
