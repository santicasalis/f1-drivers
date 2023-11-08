const axios = require("axios");
const { Driver, Team } = require("../db");

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
          "https://media.formula1.com/image/upload/f_auto/q_auto/v1699290912/fom-website/2023/Brazil/Sainz%20Brazil%202023.jpg.transform/6col/image.jpg",
        nationality: driver.nationality,
        dob: driver.dob,
        teams: driver.teams,
      };
    });

    const driversDb = await Driver.findAll({ include: [{ model: Team }] });

    const driversDbOrdered = driversDb.map((driver) => ({
      id: driver.id,
      name: driver.name,
      lastname: driver.lastname,
      description: driver.description,
      image: driver.image,
      nationality: driver.nationality,
      dob: driver.dob,
      teams: driver.Teams?.map((t) => t.name).join(","),
    }));
    console.log(driversDb);
    return [...dataDrivers, ...driversDbOrdered];
  } catch (error) {
    console.error(error);
  }
};

module.exports = getAllDrivers;
