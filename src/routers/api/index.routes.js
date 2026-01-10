import express from "express";
import profileRouter from "./profile.routes.js";
import reviewRouter from "./review.routes.js";
import matchmakingRouter from "./matchmaking.routes.js";

const router = express.Router();

router.use("/profile", profileRouter)
router.use("/review", reviewRouter)
router.use("/matchmaking", matchmakingRouter)

export default router