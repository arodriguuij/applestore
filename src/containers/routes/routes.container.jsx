import { connect } from "react-redux";
import { selectorAuthenticationByKey } from "../../redux/authentication/authentication.selector";
import Routes from "../../components/routes/routes.component";

const mapStateToProps = (state) => ({
  isSignedIn: selectorAuthenticationByKey("isSignedIn")(state),
});

export default connect(mapStateToProps)(Routes);