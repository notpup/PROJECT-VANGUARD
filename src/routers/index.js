import express from "express";
import apiRouter from "./api/index.routes.js";
import verifyAuthorization from "../middlewares/authorization.js";

const router = express.Router();

router.use("/api", apiRouter)

export default router