const webpack = require('webpack');
const { merge } = require('webpack-merge');
const base = require('./webpack.config');
const { appResolve } = require('./utils');

const serverConf = {
  mode: 'development',
  target: 'node',
  entry: appResolve('./src/server/index'),
  output: {
    path: appResolve('./dist/server'),
  },
};

module.exports = merge(base, serverConf);
