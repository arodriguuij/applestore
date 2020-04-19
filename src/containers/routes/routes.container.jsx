import { connect } from "react-redux";
import { selectorAuthenticationByKey } from "../../redux/authentication/authentication.selector";
import Routes from "../../components/routes/routes.component";

const mapStateToProps = (state) => ({
  isSignedIn: selectorAuthenticationByKey("isSignedIn")(state),
});

const RoutesContainer = connect(mapStateToProps)(Routes);
export default RoutesContainer;