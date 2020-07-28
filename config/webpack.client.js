const webpack = require('webpack');
const { merge } = require('webpack-merge');
const workboxPlugin = require('workbox-webpack-plugin');
const base = require('./webpack.config');
const { appResolve } = require('./utils');

const clientConf = {
  mode: 'development',
  entry: appResolve('./src/client/index'),
  output: {
    path: appResolve('./dist/client'),
  },

  plugins: [
    new workboxPlugin.GenerateSW({
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: false,
    }),
  ],
};

module.exports = merge(base, clientConf);
