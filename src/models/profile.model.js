import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  userId: { type: Number, required: true, unique: true },
  rating: { type: Number, required: false, default: 0 },
  experience: { type: Number, required: false, default: 0 },
  credits: { type: Number, required: false, default: 0 },
  cash: { type: Number, required: false, default: 0 },
  totalPlayTime: { type: Number, required: false, default: 0 },
  currentClan: { type: String, required: false, default: "" },

  profileVisits: { type: Number, required: false, default: 0 },
  firstJoin: { type: Date, required: true },
  lastJoin: { type: Date, required: true },

  nameplate: { type: String, required: false, default: "" },
  banner: { type: String, required: false, default: "" },
  title: { type: String, required: false, default: "" },

  inventory: [
    {
      i: { type: Number, required: true },
      id: { type: String, required: true },
      adquiredAt: { type: Date, required: true },
    }
  ],

  showcaseOrder: [
    {
      i: { type: Number, required: true },
      showcaseType: { type: String, required: true },
      dataJSON: { type: String, required: true, default: "" },
    },
  ],
  badges: [
    {
      badgeName: { type: String, required: true },
      obtained: { type: Date, required: true },
    },
  ],
});

const Profile = mongoose.model("profiles", profileSchema);

export default Profile;
