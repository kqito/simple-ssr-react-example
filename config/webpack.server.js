const webpack = require('webpack');
const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');

const base = require('./webpack.config');
const { appResolve } = require('./utils');

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';

const serverConf = {
  mode: isDevelopment ? 'development' : 'production',
  target: 'node',
  entry: appResolve('./src/server/index'),
  output: {
    path: appResolve('./dist/server'),
  },

  externals: [nodeExternals()],
};

module.exports = merge(base, serverConf);
