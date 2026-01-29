import express from "express";
import verifyAuthorization from "../../middlewares/authorization.js";

const router = express.Router();

router.get("/:ip", verifyAuthorization, async (req, res, next) => {
  try {
    const { ip } = req.params;
    const fetchRequest = await fetch(`https://ipapi.co/${ip}/json`, {
      headers: {
        "Content-Type": "application/json",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
      },
    });
    const json = await fetchRequest.json();
    const response = {
      country_name: json.country_name,
      region: json.region,
      city: json.city,
    };
    return res.status(200).json({ status: 200, response });
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
