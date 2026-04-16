import express from "express";
import verifyAuthorization from "../../middlewares/authorization.js";
import db from "../../models/index.models.js";

const router = express.Router();

const generateAlphanumericCode = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    code += chars.charAt(randomIndex);
  }

  return code;
};

router.post("/export", async (req, res, next) => {
  try {
    const { data, userId } = req.body;
    const Data = await db.ExportedSetting.create({
      code: generateAlphanumericCode(),
      creatorId: userId,
      settings: data,
      createdAt: new Date(),
    });
    console.log("Se creo el siguiente documento:", Data);
    return res
      .status(200)
      .json({ status: 200, response: "Exported successfully" });
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

router.get("/import/:code", async (req, res, next) => {
  try {
    const { code } = req.params;
    const data = await db.ExportedSetting.findOneAndUpdate(
      { code: code },
      { createdAt: new Date() },
      { new: true },
    );

    if (!data) {
      return res.status(404).json({ error: "Código expirado o inválido" });
    }

    return res.status(200).json({ status: 200, response: data });
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
