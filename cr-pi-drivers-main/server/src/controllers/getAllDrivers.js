const axios = require("axios");
const { Driver } = require("../db");

const getAllDrivers = async (req, res) => {
  try {
    let response = await axios.get("http://localhost:5000/drivers");

    let results = response.data;
    const dataDrivers = results.map((driver) => {
      return {
        id: driver.id,
        name: driver.name.forename,
        lastname: driver.name.surname,
        description: driver.description,
        image:
          driver.image.url ||
          "https://www.ford.com.ar/content/dam/Ford/website-assets/latam/ar/home/showroom/fds/far-showroom-mustang.jpg",
        nationality: driver.nationality,
        dob: driver.dob,
        teams: driver.teams,
      };
    });

    const driversDb = await Driver.findAll();

    const driversDbOrdered = driversDb.map((driver) => ({
      id: driver.id,
      name: driver.name,
      lastname: driver.lastname,
      description: driver.description,
      image: driver.image,
      nationality: driver.nationality,
      birthdate: driver.birthdate,
      teams: driver.Teams.map((team) => team.name),
    }));

    return [...dataDrivers, ...driversDbOrdered];
  } catch (error) {
    console.error(error);
  }
};

module.exports = getAllDrivers;
