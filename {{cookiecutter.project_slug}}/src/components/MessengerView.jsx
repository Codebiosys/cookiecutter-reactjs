import React from "react";
import PropTypes from "prop-types";
import Snackbar from "material-ui/Snackbar";

const MessengerView = ({ show, message, clear }) => (
  <Snackbar
    open={show}
    message={message}
    autoHideDuration={3000}
    onRequestClose={clear}
  />
);

MessengerView.propTypes = {
  message: PropTypes.string,
  show: PropTypes.bool,
  clear: PropTypes.func.isRequired,
};

MessengerView.defaultProps = {
  show: false,
  message: "",
};

export default MessengerView;
