import express from "express";
import verifyAuthorization from "../../middlewares/authorization.js";
import db from "../../models/index.models.js";

const router = express.Router();

router.get("/", verifyAuthorization, async (req, res, next) => {
  try {

  } catch (err) {
    console.log(err);
    const statusCode = err.statusCode || 500;
    return res.status(statusCode).json(
      err.details || {
        success: false,
        status: statusCode,
      },
    );
  }
});

export default router;
