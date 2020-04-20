import { connect } from "react-redux";
import { selectorPageCollectionByKeyAndNedtedKey } from "../../redux/homePageCollections/home-page-collections.selectors";
import MainImage from "../../components/main-image/main-image.component";

const mapStateToProps = (state) => ({
  img: selectorPageCollectionByKeyAndNedtedKey("mainImage", "img")(state),
  text1: selectorPageCollectionByKeyAndNedtedKey("mainImage", "text1")(state),
  text2: selectorPageCollectionByKeyAndNedtedKey("mainImage", "text2")(state),
});

export default connect(mapStateToProps)(MainImage);
