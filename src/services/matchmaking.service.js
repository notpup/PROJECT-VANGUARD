import db from "../models/index.models.js";
import { PlayerData } from "../models/match.model.js";

const UploadMatch = async (body) => {
  body.endTime = new Date().toISOString();
  //console.log(body)

  const newTeams = new Map();
  for (const [teamId, players] of Object.entries(body.teams)) {
    const newPlayers = new Map();
    for (const [playerId, data] of Object.entries(players)) {
      newPlayers.set(playerId, new PlayerData(data));
    }
    newTeams.set(teamId, newPlayers);
  }
  body.teams = newTeams;
  const result = await db.Match.create(body);
  return result;
};

const GetPlayerMatchs = async (userId, limit = 10, page = 0) => {
  const query = { // gracias chat cgt
    $expr: {
      $gt: [
        {
          $size: {
            $filter: {
              input: { $objectToArray: "$teams" },
              as: "team",
              cond: {
                $in: [
                  userId,
                  {
                    $map: {
                      input: { $objectToArray: "$$team.v" },
                      as: "player",
                      in: "$$player.k",
                    },
                  },
                ],
              },
            },
          },
        },
        0,
      ],
    },
  };
  const result = await db.Match.paginate(query, {
    page: page,
    limit: limit,
    sort: { EndTime: -1 },
    lean: true,
  });
  return result;
};

const MatchmakingService = {
  UploadMatch,
  GetPlayerMatchs,
};

export default MatchmakingService;
