import React from "react";
import PropTypes from "prop-types";

const MessengerView = ({ show, message, clear }) => (
  <div></div>
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
