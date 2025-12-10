import mongoose from "mongoose";

const playerdataSchema = new mongoose.Schema({
  userId: { type: Number, required: true },
  playTime: { type: Number, required: true },
  joinTime: { type: number, required: true },
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
    running: { type: Number, required: true }
  },
  mostKilledWithWeapon: {
    type: Map,
    of: Number,
    default: {}
  },
  mostKillsWithWeapon: {
    type: Map,
    of: Number,
    default: {}
  },
  kills: {
    type: Map,
    of: new mongoose.Schema({
      value: { type: Number, default: 0 },
      streak: { type: Number, default: 0 }
    }, { _id: false }),
    default: {}
  },
  deaths: {
    type: Map,
    of: new mongoose.Schema({
      value: { type: Number, default: 0 },
      streak: { type: Number, default: 0 }
    }, { _id: false }),
    default: {}
  },
  healing: {
    type: Map,
    of: new mongoose.Schema({
      value: { type: Number, default: 0 },
      streak: { type: Number, default: 0 }
    }, { _id: false }),
    default: {}
  },
  weaponAccuracy: {
    type: Map,
    of: new mongoose.Schema({
      shots: { type: Number, default: 0 },
      hit: { type: Number, default: 0 },
      limbs: {
        type: Map,
        of: Number,
        default: {}
      }
    }, { _id: false }),
    default: {}
  }
});

const matchSchema = new mongoose.Schema({
  StartTime: { type: Date, required: true },
  EndTime: { Type: Date, required: true },
  MatchLength : { type: Number, required: true },
  Map: { type: String, required: true },
  Gamemode: { type: String, required: true },
  ServerCountry: { type: String, required: true },
  ServerState: { type: String, required: true },
  GamemodeStats: {

    Winner: { type: String, required: false  },
  },
  teams: {
    type: Map,
    of: new mongoose.Schema({
      type: Map,
      of: playerdataSchema,
      default: {}
    }, { _id: false }),
    default: {}
  }
});

const Match = mongoose.model("matchs", matchSchema);

export default Match;
