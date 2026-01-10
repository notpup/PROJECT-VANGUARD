import MatchmakingService from "../services/matchmaking.service.js";

const CreateMatch = async (req, res) => {
  try {
    const body = req.body;
    if (!body) {
      throw new Error("'ISOStartTime' param is required");
    }

    const response = await MatchmakingService.UploadMatch(body);
    console.log(response)
    
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
}

const GetPlayerMatchs = async (req, res) => {
  try {
    const { userId, limit, page } = req.query;
    console.log(userId, limit, page)
    if (!userId) {
      throw new Error("'userId' param is required");
    }

    const response = await MatchmakingService.GetPlayerMatchs(userId, limit, page);
    console.log(response)
    
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

const MatchmakingController = {
  GetPlayerMatchs,
  CreateMatch
};

export default MatchmakingController;