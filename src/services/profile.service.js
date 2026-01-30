import db from "../models/index.models.js";

const Create = async (id, toUpdate = {}) => {

  delete toUpdate.firstJoin
  delete toUpdate.lastJoin
  
  const now = Date.now()
  const filter = {
    userId: id,
  };
  const options = {
    $set: {
      ...toUpdate,
      lastJoin: now
    },
    $setOnInsert: { firstJoin: now, }
  }
  const userProfile = await db.Profile.findOneAndUpdate(filter, options, {
    new: true,
    upsert: true,
  });
  return userProfile;
};

const Read = async (id) => {
  const profile = await db.Profile.findOne({ userId: id });
  if (!profile) {
    throw new Error("Profile not found");
  }
  return profile;
};

const ReadRoblox = async (id) => {
  const request = await fetch(`https://users.roblox.com/v1/users/${id}`, {
    method: 'GET',
  })
  if (request.status !== 200) {
    throw new Error("Roblox user not found");
  }

  const json = await request.json()
  return json;
};

const Update = async (id, edit) => {
  // En la primera version se decidio tener rutas separadas pero en la segunda version decidimos juntar las rutas
  /*
  const updated = await db.Profile.findByIdAndUpdate({ userId: id }, edit);
  if (!updated) {
    throw new Error("Ni idea que paso pero fallo el update del perfil");
  }
  return updated;*/
};

const Delete = async (id) => {
  const doc = await db.Profile.findOneAndDelete({ userId: id });
  if (!doc) {
    throw new Error("No se pudo encontrar ese documento para borrar!");
  }
  return doc;
};

const AddVisits = async (id, amount) => {
  const updatedProfile = await db.Profile.findOneAndUpdate(
    { userId: id },
    { $inc: { profileVisits: amount } },
    { new: true }
  );
  return updatedProfile;
};

const AddReview = async (toUserId, fromUserId, isPositive) => {};

const ProfileService = {
  Create,
  Read,
  ReadRoblox,
  Update,
  Delete,

  AddVisits,
  AddReview,
};

export default ProfileService;
