import { connect } from "react-redux";
import { selectorPageCollectionByKeyAndNedtedKey } from "../../redux/homePageCollections/home-page-collections.selectors";
import MobileFullImage from "../../components/mobile-full-image/mobile-full-image.component";

const mapStateToProps = (state) => ({
  bannerImgMoblie: selectorPageCollectionByKeyAndNedtedKey(
    "banner",
    "imgMobile"
  )(state),
});

export default connect(mapStateToProps)(MobileFullImage);
