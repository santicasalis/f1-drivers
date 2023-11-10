const axios = require("axios");

const { Driver, Team } = require("../db");

const { cleanObj } = require("../utils/cleanObj");

const getDriverById = async (id, source) => {
  if (source === "api") {
    let responseApi = await axios.get(`http://localhost:5000/drivers/${id}`);
    let final = responseApi.data;

    const apiDriver = cleanObj(final);
    return apiDriver;
  }
  if (source === "bdd") {
    let responseBdd = await Driver.findByPk(id, {
      include: { model: Team, attributes: ["name"] },
    });

    return responseBdd;
  }
};

module.exports = getDriverById;
