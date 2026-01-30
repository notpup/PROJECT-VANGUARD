import express from "express";
import ProfileController from "../../controllers/profile.controller.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// CRUD, perfil de jugador

// Usar para editar los datos del usuario
// Create
router.post("/:userId", ProfileController.Create)

// Usar para obtener los datos del usuario
// Read
router.get("/:userId", ProfileController.Read)
router.get("/roblox/:userId", ProfileController.ReadRoblox)

// Usar para editar datos del usuario
// Update
//router.put("/:useId", ProfileController.Update)

// Unicamente usar este endpoint cuando roblox envie un "Right to Erasure"
// Delete
router.delete("/:userId", ProfileController.Delete)

router.post("/visits/:userId/:add", ProfileController.AddVisits)

export default router