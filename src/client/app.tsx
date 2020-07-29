import React from "react";

import { Router } from "./router";
import { Footer } from "./components/footer";

export const App = () => {
  return (
    <div>
      <Router />
      <Footer />
    </div>
  );
};
