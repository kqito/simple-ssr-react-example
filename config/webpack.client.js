const webpack = require("webpack");
const { merge } = require("webpack-merge");
const base = require("./webpack.config");
const { appResolve } = require("./utils");

const workboxPlugin = require("workbox-webpack-plugin");

const clientConf = {
  mode: "development",
  entry: appResolve("./src/client/index"),

  plugins: [
    new workboxPlugin.GenerateSW({
      swDest: "sw.js",
      clientsClaim: true,
      skipWaiting: false,
    }),
  ],
};

module.exports = merge(base, clientConf);
