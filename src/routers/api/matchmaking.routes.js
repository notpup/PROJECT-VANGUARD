import express from "express";
import MatchmakingController from "../../controllers/matchmaking.controller.js";

const router = express.Router();

router.post("/upload-match", MatchmakingController.CreateMatch)
router.get("/get-player-matchs", MatchmakingController.GetPlayerMatchs)

export default router