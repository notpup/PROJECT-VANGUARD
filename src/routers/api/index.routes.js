import express from "express";
import profileRouter from "./profile.routes.js";
import reviewRouter from "./review.routes.js";

const router = express.Router();

router.use("/profile", profileRouter)
router.use("/review", reviewRouter)

export default router