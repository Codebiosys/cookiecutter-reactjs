/* eslint-disable */
/**
 * Distribution settings for application.
 */
"use strict";

var path = require("path");
var webpack = require("webpack");

var config = require("./webpack.common");

config.plugins = config.plugins.concat([
  new webpack.optimize.UglifyJsPlugin(),
]);

module.exports = config;
