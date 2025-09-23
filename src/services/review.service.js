import db from "../models/index.models.js";

const Create = async (toUserId, fromUserId, isPositive) => {
  const now = Date.now()
  const ruid = `${String(toUserId)}_${String(fromUserId)}`;
  const data = {
    to: toUserId,
    from: fromUserId,
    positive: isPositive,
  };
  const reviewAdded = await db.Review.findOneAndUpdate(
    { ruid: ruid },
    { $set: { ...data, lastModify: now }, $setOnInsert: { created: now } },
    { new: true, upsert: true }
  );
  return reviewAdded;
};

const Read = async (userId) => {
  const stats = await db.Review.aggregate([
    { $match: { to: Number(userId) } },
    {
      $group: {
        _id: "$positive",
        count: { $sum: 1 },
      },
    },
  ]);
  const result = {
    positives: 0,
    negatives: 0,
  };
  for (const stat of stats) {
    if (stat._id === true) {
      result.positives = stat.count;
    } else {
      result.negatives = stat.count;
    }
  }
  return result;
};

const Update = async (id, edit) => {};

const Delete = async (id) => {};

const ReviewService = {
  Create,
  Read,
  Update,
  Delete,
};

export default ReviewService;
