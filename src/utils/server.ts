import express from "express";

import { json, urlencoded } from "body-parser";
import cors from "cors";
import fuckBookies from "../routes/fuckBookies";

function createServer() {
  const app = express();
  app.use(json());
  app.use(urlencoded({ extended: true }));

  app.use(cors());

  app.use("/fuck-bookies", fuckBookies);

  return app;
}

export default createServer;
