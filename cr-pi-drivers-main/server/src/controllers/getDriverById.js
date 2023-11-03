const axios = require("axios");
const { Driver, Team } = require("../db");
const { cleanObj } = require("../utils/cleanObj");
const getDriverById = async (id, source) => {
  // const driver =
  //   source === "api"
  //     ? (await axios.get(`http://localhost:5000/drivers/${id}`)).data
  //     : await Driver.findByPk(id, {
  //         include: { model: Team, attributes: ["name"] },
  //       });

  // const apiDriver = cleanObj(driver);

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
    console.log(responseBdd);
    return responseBdd;
  }
};

module.exports = getDriverById;
