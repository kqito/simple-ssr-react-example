import React from "react";
import { Request, Response } from "express";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { ChunkExtractor } from "@loadable/server";

import { App } from "../../../client/app";
import { appResolve } from "../../../utils/path";
import { renderHtml } from "./renderHtml";

const statsFile = appResolve("./dist/client/loadable-stats.json");

export function renderer(req: Request, res: Response) {
  const context = {};

  const Root = () => (
    <div id="app">
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </div>
  );

  try {
    const extractor = new ChunkExtractor({ statsFile });
    const jsx = extractor.collectChunks(<Root />);
    const body = renderToString(jsx);
    const script = extractor.getScriptTags();
    const style = extractor.getStyleTags();

    const html = renderHtml({ body, script, style });

    res.send(html);
  } catch (e) {
    console.error(e);
    res.status(500).send(e.message);
  }
}
