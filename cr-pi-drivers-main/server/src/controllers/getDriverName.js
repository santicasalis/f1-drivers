const axios = require("axios");
const { Driver } = require("../db");
const { Op } = require("sequelize");

const getDriverName = async (name) => {
  const apiResponse = await axios.get("http://localhost:5000/drivers");

  const apiResponseFilter = apiResponse.data.filter((driver) =>
    driver.name.forename.toLowerCase().includes(name.toLowerCase())
  );

  const dbDriver = await Driver.findAll({
    where: {
      name: { [Op.iLike]: name },
    },
  });

  if (!apiResponseFilter.length && !dbDriver.length)
    throw Error("This driver not exist");

  return [...apiResponseFilter, ...dbDriver].slice(0, 15);
};

module.exports = getDriverName;
