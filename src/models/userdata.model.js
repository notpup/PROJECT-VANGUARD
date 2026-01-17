import mongoose from "mongoose";

const userdataSchema = new mongoose.Schema({
  userId: { type: Number, required: true, unique: true },
  SHOW_FPS: { type: Boolean, required: false, default: true },
  SHOW_PING: { type: Boolean, required: false, default: true },

  RBX_MATS: { type: Boolean, required: false, default: true },
  RBX_SHADOWS: { type: Boolean, required: false, default: true },
  GAME_SHADERS: { type: Boolean, required: false, default: true },

  RAYCAST_QUALITY: { type: String, required: false, default: "HIGH", enum: ["LOW", "MEDIUM", "HIGH"] },
  ANIMATED_RAYCAST: { type: Boolean, required: false, default: true },
  BULLET_HOLES: { type: Boolean, required: false, default: true },
  SHOW_BLOOD: { type: Boolean, required: false, default: true },
  HIT_PARTICLES: { type: Boolean, required: false, default: true },
  WEAPON_PARTICLES: { type: Boolean, required: false, default: true },
  MEDIC_PARTICLES: { type: Boolean, required: false, default: true },

  CURSOR_TYPE: { type: String, required: false, default: "PRESET", enum: ["PRESET", "CUSTOM"] },
  CURSOR_SET: { type: Number, required: false, default: 1 },
  CURSOR_ID: { type: String, required: false, default: ""},

  SHOW_DMGINDICATOR: { type: Boolean, required: false, default: true },
  DMGINDICATOR_TYPE: { type: String, required: false, default: "FLOAT", enum: ["COUNT", "FLOAT"] },
  DMGINDICATOR_SIZE: { type: String, required: false, default: "MEDIUM", enum: ["MINI", "MEDIUM", "BIG"] },

  HITMARKER: { type: Boolean, required: false, default: true },
  HITMARKER_TYPE: { type: String, required: false, default: "EXPANSIVE", enum: ["STATIC", "EXPANSIVE", "ROTATIVE"] },
  HITMARKER_SET: { type: Number, required: false, default: 1 },

  HIGHLIGHT_HIT_COLOR: { type: String, required: false, default: "WHITE", enum: ["RED", "WHITE"] },
  HIGHLIGHT_FILL: { type: Boolean, required: false, default: true },
  HIGHLIGHT_ALWAYS_BE_RED_ON_HEAD: { type: Boolean, required: false, default: true },
});

const Userdata = mongoose.model("userdatas", userdataSchema);

export default Userdata;
