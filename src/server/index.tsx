import express from "express";

import { useWebpackHotMiddleware } from "./hmr";
import { renderer } from "./controllers/renderer";

const isDevelopment = process.env.NODE_ENV === "development";
const app = express();

if (isDevelopment) {
  useWebpackHotMiddleware(app);
}

app.use(express.static("dist/client"));
app.get("*", renderer);

const port = process.env.PORT || 8765;
app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);
