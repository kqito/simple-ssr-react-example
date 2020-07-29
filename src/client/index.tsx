import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { loadableReady } from "@loadable/component";
import { Router } from "./router";

const renderDom = module.hot ? ReactDom.render : ReactDom.hydrate;

export const render = () => {
  renderDom(
    <BrowserRouter>
      <Router />
    </BrowserRouter>,
    document.getElementById("app")
  );
};

if (module.hot) {
  module.hot.accept("./router", () => {
    render();
  });
}

loadableReady(() => {
  render();
});
