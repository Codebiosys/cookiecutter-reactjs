import React from "react";
import PropTypes from "prop-types";

import './AppCanvas.css';

const AppCanvas = ({ children, messenger }) => (
    <div className="App">
      <div className="navbar">{{cookiecutter.project_name}}</div>
      <div className="App__body">
        {children}
      </div>
      {messenger}
    </div>
);

AppCanvas.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(React.PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  messenger: PropTypes.node.isRequired,
};

export default AppCanvas;
