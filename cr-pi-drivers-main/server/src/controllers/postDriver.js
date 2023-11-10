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
    if (!image) {
      image =
        "https://media.formula1.com/image/upload/v1699215893/trackside-images/2023/F1_Grand_Prix_of_Brazil/1776826508.jpg.transform/3col/image.jpg";
    }
    const teamsDb = await Team.findAll({
      where: { name: teams },
    });

    const newDriver = await Driver.create({
      name,
      lastname,
      description,
      image,
      nationality,
      dob,
    });

    await newDriver.addTeams(teamsDb);

    return newDriver;
  } catch (error) {
    throw error;
  }
};

module.exports = postDriver;
