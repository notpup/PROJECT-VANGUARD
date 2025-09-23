import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  // ruid (review unique id) es una mezcla entre el usuario al que se le realizo la review y el usuario que envio la review
  ruid: { type: String, required: true, unique: true },
  created: { type: Date, required: true },
  lastModify: {type: Date, required: true },
  to: { type: Number, required: true },
  from: { type: Number, required: true },
  positive: { type: Boolean, required: true },
  reviewType: { type: Number, required: false, default: 0 },
  extra: { type: String, required: false, default: "" }
});

const Review = mongoose.model("reviews", reviewSchema);

export default Review;
