import { breadcrumbSelectorByKey } from "../../redux/breadcrumb/breadcrumb.selector";
import { connect } from "react-redux";
import BreadCrumb from "../../components/breadcrumb/breadcrumb.component";

const mapStateToProps = (state) => ({
  breadcrumb: breadcrumbSelectorByKey("text")(state),
});

export default connect(mapStateToProps)(BreadCrumb);
