
import ReviewService from "../services/review.service.js";

const Create = async (req, res) => {
  try {
    const { userId, from, positive } = req.params;
    if (!userId) {
      throw new Error("'userId' param is required");
    }
    if (!from) {
      throw new Error("'from' param is required");
    }
    if (!positive) {
      throw new Error("'positive' param is required");
    }
    if (positive != "true" && positive != "false") {
      throw new Error("'positive' must be 'true' or 'false'");
    }
    const isPositive = (positive == "true")
    const reviewAdded = await ReviewService.Create(userId, from, isPositive);
    return res.status(201).json({
      success: true,
      status: 201,
      response: reviewAdded,
    });
  } catch (err) {
    console.log(err);
    const statusCode = err.statusCode || 500;
    return res.status(statusCode).json(
      err.details || {
        success: false,
        status: statusCode,
        message: err.message,
      }
    );
  }
};

const Read = async (req, res) => {
try {
    const { userId } = req.params;
    if (!userId) {
      throw new Error("'userId' is required");
    }
    const reviews = await ReviewService.Read(userId);
    return res.status(200).json({
      success: true,
      status: 200,
      response: reviews,
    });
  } catch (err) {
    console.log(err);
    const statusCode = err.statusCode || 500;
    return res.status(statusCode).json(
      err.details || {
        success: false,
        status: statusCode,
        message: err.message,
      }
    );
  }
}

const ReviewController = {
  Create,
  Read
}

export default ReviewController