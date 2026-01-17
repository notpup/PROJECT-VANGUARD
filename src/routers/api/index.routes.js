import express from "express";
import profileRouter from "./profile.routes.js";
import reviewRouter from "./review.routes.js";
import matchmakingRouter from "./matchmaking.routes.js";
import userdataRouter from "./userdata.routes.js";

const router = express.Router();

router.use("/profile", profileRouter)
router.use("/review", reviewRouter)
router.use("/matchmaking", matchmakingRouter)
router.use("/userdata", userdataRouter)

// RECORDAR: ANTES DEL RELEASE DEL JUEGO AÑADIR "/api/v1" y colocar todos estos endpoints

export default router