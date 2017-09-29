import { connect } from "react-redux";
import _ from "lodash";

import { clearMessage } from "actions";
import MessengerView from "components/MessengerView";
import { MESSAGES } from "reducers/constants";

const mapStateToProps = state => ({
  message: _.get(state, `${MESSAGES}.message`, ""),
  show: _.get(state, `${MESSAGES}.display`, false),
});

const mapDispatchToProps = dispatch => ({
  clear: () => {
    dispatch(clearMessage());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MessengerView);
