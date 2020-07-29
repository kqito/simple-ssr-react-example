const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { appResolve } = require('./utils');

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  plugins: [
    new webpack.ProgressPlugin(),
    new CaseSensitivePathsPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: 'main.[chunkhash].css' }),
  ],

  module: {
    rules: [
      {
        test: /.(ts|tsx|js|jsx)?$/,
        loader: 'babel-loader',
        include: appResolve('./src/'),
        exclude: [/node_modules/],
      },
      {
        test: /.css$/,

        use: [
          isProduction && {
            loader: MiniCssExtractPlugin.loader,
          },
          isDevelopment && {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',

            options: {
              sourceMap: true,
            },
          },
        ].filter(Boolean),
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  optimization: {
    minimizer: [new TerserPlugin()],

    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/,
        },
      },

      chunks: 'async',
      minChunks: 1,
      minSize: 30000,
      name: true,
    },
  },
};
