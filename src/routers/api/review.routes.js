import express from "express";
import ReviewController from "../../controllers/review.controller.js";

const router = express.Router();

router.post("/:userId/:from/:positive", ReviewController.Create)
router.get("/:userId", ReviewController.Read)

export default router