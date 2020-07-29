const webpack = require('webpack');
const { merge } = require('webpack-merge');

const workboxPlugin = require('workbox-webpack-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');

const base = require('./webpack.config');
const { appResolve } = require('./utils');

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';

const clientConf = {
  mode: isProduction ? 'production' : 'development',

  entry: [
    isDevelopment && 'webpack-hot-middleware/client',
    appResolve('./src/client/index'),
  ].filter(Boolean),

  output: {
    path: appResolve('./dist/client'),
  },

  plugins: [
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    isProduction &&
      new workboxPlugin.GenerateSW({
        swDest: 'sw.js',
        clientsClaim: true,
        skipWaiting: false,
      }),
    new LoadablePlugin(),
  ].filter(Boolean),
};

module.exports = merge(base, clientConf);
