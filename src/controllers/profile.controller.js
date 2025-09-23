import ProfileService from "../services/profile.service.js";

const Create = async (req, res) => {
  try {
    const { userId } = req.params;
    const update = req.body;
    const response = await ProfileService.Create(userId, update);
    if (!userId) {
      throw new Error("'userId' param is required");
    }

    return res.status(200).json({
      success: true,
      status: 200,
      response,
    });
  } catch (err) {
    console.log(err);
    const statusCode = err.statusCode || 500;
    return res.status(statusCode).json(
      err.details || {
        success: false,
        status: statusCode,
        message: err.message,
      }
    );
  }
};

const Read = async (req, res) => {
  try {
    const { userId } = req.params;
    const response = await ProfileService.Read(userId);
    return res.status(200).json({
      success: true,
      status: 200,
      response,
    });
  } catch (err) {
    console.log(err);
    const statusCode = err.statusCode || 500;
    return res.status(statusCode).json(
      err.details || {
        success: false,
        status: statusCode,
        message: err.message,
      }
    );
  }
};

const Update = async (req, res) => {};

const Delete = async (req, res) => {
  try {
    const { userId } = req.params;
    const response = await ProfileService.Delete(userId);
    return res.status(200).json({
      success: true,
      status: 200,
      response,
    });
  } catch (err) {
    console.log(err);
    const statusCode = err.statusCode || 500;
    return res.status(statusCode).json(
      err.details || {
        success: false,
        status: statusCode,
        message: err.message,
      }
    );
  }
};

const AddVisits = async (req, res) => {
  try {
    const { userId, add } = req.params;
    if (!userId) {
      throw new Error("'UserId' is required")
    }
    if (!add) {
      throw new Error("'Add' is required")
    }
    const updated = await ProfileService.AddVisits(userId, add)
    return res.status(200).json({
      success: true,
      status: 200,
      updated,
    });
  } catch (err) {
    console.log(err);
    const statusCode = err.statusCode || 500;
    return res.status(statusCode).json(
      err.details || {
        success: false,
        status: statusCode,
        message: err.message,
      }
    );
  }
};



const ProfileController = {
  Create,
  Read,
  Update,
  Delete,

  AddVisits,
};

export default ProfileController;
