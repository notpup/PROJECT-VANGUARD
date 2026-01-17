import db from "../models/index.models.js";

const Create = async (id, toUpdate = {}) => {

  delete toUpdate.userId;
  delete toUpdate._id;
  
  const filter = {
    userId: id,
  };
  const options = {
    $set: {
      ...toUpdate,
    },
    $setOnInsert: { userId: id, }
  }
  const userProfile = await db.Userdata.findOneAndUpdate(filter, options, {
    new: true,
    upsert: true,
  });
  return userProfile;
};

const Read = async (id) => {
  const profile = await db.Userdata.findOne({ userId: id });
  if (!profile) {
    throw new Error("Userdata not found");
  }
  return profile;
};

const Delete = async (id) => {
  const doc = await db.Userdata.findOneAndDelete({ userId: id });
  if (!doc) {
    throw new Error("No se pudo encontrar ese documento para borrar!");
  }
  return doc;
};

const UserdataService = {
  Create,
  Read,
  Delete,
};

export default UserdataService;
