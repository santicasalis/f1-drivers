const axios = require("axios");
const { Driver, Team } = require("../db");
const { Op } = require("sequelize");

const getDriverName = async (name) => {
  const apiResponse = await axios.get("http://localhost:5000/drivers");

  const apiResponseFilter = apiResponse.data.filter(
    (driver) =>
      driver.name.forename.toLowerCase().includes(name.toLowerCase()) ||
      driver.name.surname.toLowerCase().includes(name.toLowerCase()) ||
      driver.nationality.toLowerCase().includes(name.toLowerCase())
  );

  const apiResponseFilterOrdered = apiResponseFilter.map((driver) => ({
    id: driver.id,
    name: driver.name.forename,
    lastname: driver.name.surname,
    description: driver.description,
    image:
      driver.image.url ||
      "https://www.ford.com.ar/content/dam/Ford/website-assets/latam/ar/home/showroom/fds/far-showroom-mustang.jpg",
    nationality: driver.nationality,
    birthdate: driver.dob,
    teams: driver.teams,
  }));

  const dbDriver = await Driver.findAll({
    where: {
      [Op.or]: [
        { name: { [Op.iLike]: `%${name}%` } },
        { lastname: { [Op.iLike]: `%${name}%` } },
        { nationality: { [Op.iLike]: `%${name}%` } },
      ],
    },
    include: [{ model: Team }],
  });
  console.log(dbDriver);
  const dbDriverOrdered = dbDriver.map((driver) => ({
    id: driver.id,
    name: driver.name,
    lastname: driver.lastname,
    description: driver.description,
    image: driver.image,
    nationality: driver.nationality,
    birthdate: driver.birthdate,
    teams: driver.Teams?.map((t) => t.name).join(","),
  }));

  console.log(dbDriverOrdered);
  if (!apiResponseFilterOrdered.length && !dbDriverOrdered.length)
    throw Error("This driver not exist");

  return [...apiResponseFilterOrdered, ...dbDriverOrdered].slice(0, 15);
};

module.exports = getDriverName;
