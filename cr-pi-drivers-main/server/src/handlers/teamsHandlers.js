const getAllTeams = require("../controllers/getAllTeams");

const getTeamsHandler = async (req, res) => {
  try {
    const results = await getAllTeams();

    res.status(200).send(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getTeamsHandler };
