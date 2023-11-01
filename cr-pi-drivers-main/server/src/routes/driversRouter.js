const { Router } = require("express");

const driversRouter = Router();

const {
  getDriversHandler,
  getDriverHandler,
  createDriverHandler,
} = require("../handlers/driversHandlers");

driversRouter.get("/", getDriversHandler);

driversRouter.get("/:id", getDriverHandler);

driversRouter.post("/", createDriverHandler);

module.exports = driversRouter;
