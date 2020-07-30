import React from "react";
import ReactDom from "react-dom";
import { loadableReady } from "@loadable/component";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app";

import "./index.css";

export const render = () => {
  ReactDom.hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("app")
  );
};

if (module.hot) {
  module.hot.accept("./app", () => {
    render();
  });
}

loadableReady(() => {
  render();
});
