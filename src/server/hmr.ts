import { Express } from "express";
import webpack from "webpack";

export function useWebpackHotMiddleware(app: Express) {
  /* eslint global-require: 0 */
  const config = require("../../config/webpack.client.js");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");

  const compiler = webpack(config);

  app.use(webpackHotMiddleware(compiler));
  app.use(
    webpackDevMiddleware(compiler, {
      writeToDisk(filePath: string) {
        return /loadable-stats/.test(filePath);
      }
    })
  );
}
