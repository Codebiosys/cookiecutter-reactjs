/* eslint-disable */
/**
 * Development build specification (default)
 *
 * Allow build of applciation suitable for testing and development.
 */

"use strict";

var path = require("path");
var webpack = require("webpack");

var config = require("./webpack.common");

// Slow build, faster rebuilds
// https://webpack.js.org/configuration/devtool/
config.devtool = "eval-source-map";

config.devServer = {
  hot: true,  // Hot-Module replace without restart
  host: "0.0.0.0",
  disableHostCheck: true,
  port: 3000, // Port Number
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

// Ensure Hot-Module-Replace works inside of Docker on MacOS
config.watchOptions = { poll: true };

config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
]);

module.exports = config;
