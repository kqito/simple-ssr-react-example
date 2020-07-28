import React from "react";
import { Route, Switch } from "react-router-dom";

import { Index } from "./pages/index";
import { About } from "./pages/about";
import { Me } from "./pages/me";

export const Router = () => (
  <Switch>
    <Route exact path="/">
      <Index />
    </Route>
    <Route exact path="/about">
      <About />
    </Route>
    <Route exact path="/me">
      <Me />
    </Route>
  </Switch>
);
