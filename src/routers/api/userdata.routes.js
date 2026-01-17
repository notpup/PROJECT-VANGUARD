import express from "express";
import UserdataController from "../../controllers/userdata.controller.js";

const router = express.Router();

// CRUD, datos del jugador

router.post("/:userId", UserdataController.Create)
router.get("/:userId", UserdataController.Read)
router.delete("/:userId", UserdataController.Delete)

export default router