const { Router } = require("express");

const driversRouter = Router();

const {
  getDriversHandler,
  getDriverHandler,
  createDriverHandler,
  //getNameDrivers,
} = require("../handlers/driversHandlers");

driversRouter.get("/", getDriversHandler);

driversRouter.get("/:id", getDriverHandler);

driversRouter.post("/", createDriverHandler);

//driversRouter.get("/name", getNameDrivers);

module.exports = driversRouter;
