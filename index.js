import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";

import morganConfig from "./src/config/logger.js";
import { PORT } from "./src/config/constants.js";

import routes from "./src/routers/index.js";

import connectDatabase from "./src/config/mongoose.js";

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(morgan(morganConfig));
app.use("/", routes);
app.get("/", (req, res) => {
  return res.status(200).json({
    message: "server online!"
  })
})

mongoose.connection.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
  });
});

connectDatabase()