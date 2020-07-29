import React from "react";
import ReactDom from "react-dom";
import { loadableReady } from "@loadable/component";
import { App } from "./app";

const renderDom = module.hot ? ReactDom.render : ReactDom.hydrate;

export const render = () => {
  renderDom(<App />, document.getElementById("app"));
};

if (module.hot) {
  module.hot.accept("./app", () => {
    render();
  });
}

loadableReady(() => {
  render();
});
