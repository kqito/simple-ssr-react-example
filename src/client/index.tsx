import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { loadableReady } from "@loadable/component";
import { Router } from "./router";

export const render = () => {
  ReactDom.hydrate(
    <BrowserRouter>
      <Router />
    </BrowserRouter>,
    document.getElementById("app")
  );
};

loadableReady(() => {
  render();
});
