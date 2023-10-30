const { Driver, Team } = require("../db");

const postDriver = async (
  name,
  surname,
  description,
  image,
  nationality,
  dob,
  team
) => {
  try {
    // Primero, intenta encontrar el equipo existente o crearlo si no existe
    const [teamName, created] = await Team.findOrCreate({
      where: { name: team }, // Buscar por el nombre del equipo
    });

    // Crea un nuevo conductor con el equipo encontrado o creado
    const newDriver = await Driver.create({
      name,
      surname,
      description,
      image,
      nationality,
      dob,
      TeamId: teamName.id, // Asocia el ID del equipo al conductor
    });

    return newDriver;
  } catch (error) {
    throw error;
  }
};

//   const newDriver = await Driver.create({
//     name,
//     surname,
//     description,
//     image,
//     nationality,
//     dob,
//   });
//   return newDriver;

module.exports = postDriver;
