import UserdataService from "../services/userdata.service.js";

const Create = async (req, res) => {
  try {
    const { userId } = req.params;
    const update = req.body;
    const response = await UserdataService.Create(userId, update);
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
    const response = await UserdataService.Read(userId);
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

const Delete = async (req, res) => {
  try {
    const { userId } = req.params;
    const response = await UserdataService.Delete(userId);
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

const UserdataController = {
  Create,
  Read,
  Delete,
};

export default UserdataController;