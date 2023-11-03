const postDriver = require("../controllers/postDriver");
const getDriverById = require("../controllers/getDriverById");
const getAllDrivers = require("../controllers/getAllDrivers");
const getDriverName = require("../controllers/getDriverName");

const getDriversHandler = async (req, res) => {
  try {
    const { name } = req.query;
    const results = name ? await getDriverName(name) : await getAllDrivers();

    res.status(200).json(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getDriverHandler = async (req, res) => {
  const { id } = req.params;

  const source = isNaN(id) ? "bdd" : "api";

  try {
    const driver = await getDriverById(id, source);
    res.status(200).json(driver);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createDriverHandler = async (req, res) => {
  try {
    const { name, lastname, description, image, nationality, dob, teams } =
      req.body;

    const newDriver = await postDriver(
      name,
      lastname,
      description,
      image,
      nationality,
      dob,
      teams
    );
    console.log(newDriver);
    res.status(201).json(newDriver);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getDriversHandler,
  getDriverHandler,
  createDriverHandler,
};
