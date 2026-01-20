import mongoose from "mongoose";
import paginate from "mongoose-paginate-v2";

const playerdataSchema = new mongoose.Schema({
  userId: { type: Number, required: true },
  playTime: { type: Number, required: true },
  joinTime: { type: Number, required: true },
  disconnected: { type: Boolean, required: true },
  stats: {
    kills: { type: Number, required: true },
    deaths: { type: Number, required: true },
    healingDealt: { type: Number, required: true },
    healingTaken: { type: Number, required: true },
    damageDealt: { type: Number, required: true },
    damageTaken: { type: Number, required: true },
    headshots: { type: Number, required: true },
    assists: { type: Number, required: true },
    streak: { type: Number, required: true },
    running: { type: Number, required: true },
  },
  mostKilledWithWeapon: {
    type: Map,
    of: Number,
    default: {},
  },
  mostKillsWithWeapon: {
    type: Map,
    of: Number,
    default: {},
  },
  kills: {
    type: Map,
    of: new mongoose.Schema(
      {
        value: { type: Number, default: 0 },
        streak: { type: Number, default: 0 },
      },
      { _id: false }
    ),
    default: {},
  },
  deaths: {
    type: Map,
    of: new mongoose.Schema(
      {
        value: { type: Number, default: 0 },
        streak: { type: Number, default: 0 },
      },
      { _id: false }
    ),
    default: {},
  },
  healing: {
    type: Map,
    of: new mongoose.Schema(
      {
        value: { type: Number, default: 0 },
        streak: { type: Number, default: 0 },
      },
      { _id: false }
    ),
    default: {},
  },
  weaponAccuracy: {
    type: Map,
    of: new mongoose.Schema(
      {
        shoots: { type: Number, default: 0 },
        hit: { type: Number, default: 0 },
        limbs: {
          type: Map,
          of: Number,
          default: {},
        },
      },
      { _id: false }
    ),
    default: {},
  },
});

const matchSchema = new mongoose.Schema({
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  matchLength: { type: Number, required: true },
  map: { type: String, required: true },
  gamemode: { type: String, required: true },
  ip: { type: String, required: true },
  regionCountry: { type: String, required: true },
  regionState: { type: String, required: true },
  gamemodeStats: {
    Winner: { type: String, required: false },
  },
  teams: {
    type: Map,
    of: {
      type: Map,
      of: playerdataSchema,
      default: {},
    },
    default: {},
  },
});

matchSchema.plugin(paginate);
const Match = mongoose.model("matchs", matchSchema);
const PlayerData = mongoose.model("playerdata", playerdataSchema);
export default Match;
export { PlayerData };
