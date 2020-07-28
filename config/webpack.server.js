const webpack = require("webpack");
const { merge } = require("webpack-merge");
const base = require("./webpack.config");
const { appResolve } = require("./utils");

const serverConf = {
  mode: "development",
  entry: appResolve("./src/server/index"),
};

module.exports = merge(base, serverConf);
