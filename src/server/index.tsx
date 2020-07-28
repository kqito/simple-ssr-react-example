import express from "express";

import { renderer } from "./controllers/renderer";

const app = express();

app.use(express.static("dist/client"));
app.get("*", renderer);

const port = process.env.PORT || 8765;
app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);
