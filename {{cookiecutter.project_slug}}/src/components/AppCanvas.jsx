import React from "react";
import PropTypes from "prop-types";

import getMuiTheme from "material-ui/styles/getMuiTheme";
import { MuiThemeProvider } from "material-ui/styles";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";

import './AppCanvas.css';

const muiTheme = getMuiTheme(lightBaseTheme);

const AppCanvas = ({ children, messenger }) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div className="App">
      <div className="navbar">React + GraphQL Tutorial</div>
      <div className="App__body">
        {children}
      </div>
      {messenger}
    </div>
  </MuiThemeProvider>
);

AppCanvas.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(React.PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  messenger: PropTypes.node.isRequired,
};

export default AppCanvas;
