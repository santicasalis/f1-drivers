const { Driver, Team } = require("../db");

const postDriver = async (
  name,
  lastname,
  description,
  image,
  nationality,
  dob,
  teams
) => {
  try {
    // Primero, intenta encontrar el equipo existente o crearlo si no existe
    const [teamName, created] = await Team.findOrCreate({
      where: { name: teams },
    });

    const newDriver = await Driver.create({
      name,
      lastname,
      description,
      image,
      nationality,
      dob,
      teams,
      TeamId: teamName.id,
    });

    return newDriver;
  } catch (error) {
    throw error;
  }
};

module.exports = postDriver;
