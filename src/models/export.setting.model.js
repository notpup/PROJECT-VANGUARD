import mongoose from "mongoose";
import { userdataSchema } from "./userdata.model.js";

const ExportSettingsSchema = userdataSchema.clone();
ExportSettingsSchema.path('userId').required(false);
ExportSettingsSchema.set('_id', false);

const exportSettingSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
      index: true,
      uppercase: true,
      trim: true,
    },
    creatorId: {
      type: Number,
      required: true,
      index: true,
    },
    settings: {
      type: ExportSettingsSchema,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      expires: "14d",
    },
  },
  {
    timestamps: false,
    versionKey: false,
  },
);

const ExportedSetting = mongoose.model("ExportedSettings", exportSettingSchema);
export default ExportedSetting;
