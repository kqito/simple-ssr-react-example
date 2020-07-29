import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";

import "./style/global.css";

export const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};
