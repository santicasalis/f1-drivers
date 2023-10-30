const axios = require("axios");
const { Team } = require("../db");

const getAllTeams = async () => {
  try {
    const dbTeams = await Team.findAll();

    if (!dbTeams.length) {
      const uniqueTeams = new Set();
      let response = await axios.get("http://localhost:5000/drivers");

      let results = response.data;

      const allTeamsString = results.map((teams) => teams.teams);

      allTeamsString.forEach((teams) => {
        if (teams) {
          const teamArray = teams.split(",").map((team) => team.trim());
          teamArray.forEach((team) => {
            uniqueTeams.add(team);
          });
        }
      });
      uniqueTeams.forEach(
        async (teamName) => await Team.create({ name: teamName })
      );
      return [...uniqueTeams];
    }
    return dbTeams;
  } catch (error) {
    throw error;
  }
};

module.exports = getAllTeams;
