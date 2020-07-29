import React from "react";
import ReactDom from "react-dom";
import { loadableReady } from "@loadable/component";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app";

import "./style/global.css";

const renderDom = module.hot ? ReactDom.render : ReactDom.hydrate;

export const render = () => {
  renderDom(
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
