import mongoose from "mongoose";

const userdataSchema = new mongoose.Schema({
  userId: { type: Number, required: true, unique: true },
  
  CURSOR_ID: { type: String, required: false, default: ""},
  CURSOR_IFF: { type: Boolean, required: false, default: true },
  CURSOR_SET: { type: Number, required: false, default: 1 },
  CURSOR_HISTORY: { type: String, required: false, default: "" },
  CURSOR_TYPE: { type: String, required: false, default: "PRESET", enum: ["PRESET", "CUSTOM"] },
  
  SHOW_DMGINDICATOR: { type: Boolean, required: false, default: true },
  DMGINDICATOR_TYPE: { type: String, required: false, default: "FLOAT", enum: ["COUNT", "FLOAT"] },
  DMGINDICATOR_STICKS: { type: String, required: false, default: "CURSOR", enum: ["PLAYER", "CURSOR"] },
  DMGINDICATOR_SIZE: { type: String, required: false, default: "28", enum: ["20", "22", "24", "26", "28", "30", "32", "34", "36"] },

  HITMARKER: { type: Boolean, required: false, default: true },
  HITMARKER_COLOR: { type: String, required: false, default: "WHITE", enum: ["ORANGE", "WHITE", "YELLOW", "RED"] },
  HITMARKER_TYPE: { type: String, required: false, default: "EXPAND", enum: ["STATIC", "EXPAND", "ROTATE"] },
  HITMARKER_SIZE: { type: Number, required: false, default: 1 },
  HITMARKER_SET: { type: Number, required: false, default: 1 },

  KILLMARKER: { type: Boolean, required: false, default: true },
  KILLMARK_TYPE: { type: String, required: false, default: "CIRCLE", enum: ["CIRCLE", "SKULL"] },
  KILLMARK_POSITION: { type: String, required: false, default: "CURSOR", enum: ["CURSOR", "PLAYER"] },

  GENERAL_QUALITY: { type: String, required: false, default: "HIGH", enum: ["LOW", "MEDIUM", "HIGH", "CUSTOM"] },

  RBX_MATS: { type: Boolean, required: false, default: true },
  RBX_SHADOWS: { type: Boolean, required: false, default: true },
  GAME_SHADERS: { type: Boolean, required: false, default: true },
  BULLET_HOLES: { type: Boolean, required: false, default: true },
  WEAPON_HOLSTERS: { type: String, required: false, default: "ALL", enum: ["ALL", "SELF", "OFF"] },

  TOGGLES_RAYCAST: { type: Boolean, required: false, default: true },
  ANIMATED_RAYCAST: { type: Boolean, required: false, default: true },
  RAYCAST_QUALITY: { type: String, required: false, default: "HIGH", enum: ["LOW", "MEDIUM", "HIGH"] },
  RAYCAST_SPEED: { type: String, required: false, default: "NORMAL", enum: ["SLOW", "NORMAL", "FAST"] },

  WEAPON_PARTICLES: { type: Boolean, required: false, default: true },
  MEDIC_PARTICLES: { type: Boolean, required: false, default: true },
  SHOW_BLOOD: { type: Boolean, required: false, default: true },
  HIT_PARTICLES: { type: Boolean, required: false, default: true },

  HIGHLIGHT_HITBOX: { type: Boolean, required: false, default: true },
  HIGHLIGHT_FILL_TYPE: { type: String, required: false, default: "BOTH", enum: ["OUTLINE", "FILL", "BOTH"] },
  HIGHLIGHT_HIT_COLOR: { type: String, required: false, default: "WHITE", enum: ["RED", "WHITE", "ORANGE"] },
  HIGHLIGHT_ALWAYS_BE_RED_ON_HEAD: { type: Boolean, required: false, default: true },

  SHOW_FPS: { type: Boolean, required: false, default: true },
  SHOW_PING: { type: Boolean, required: false, default: true },
  
  SHOW_KILLFEED: { type: Boolean, required: false, default: true },
  SHOW_DAMAGEUI: { type: Boolean, required: false, default: true },
  DAMAGEUI_TYPE: { type: String, required: false, default: "BOTH", enum: ["GRADIENT", "BORDERS", "BOTH"] },

  SHOW_TEAMESP: { type: Boolean, required: false, default: true },
  SHOW_ENEMYESP: { type: Boolean, required: false, default: true },
  ESP_SIZE: { type: Number, required: false, default: 1 },
  OVERHEAD_TYPE: { type: String, required: false, default: "DETAILED", enum: ["CONDENSED", "DETAILED"] }
}, { _id: false });

const Userdata = mongoose.model("userdatas", userdataSchema);

export default Userdata;
export { userdataSchema }
