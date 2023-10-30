const { Router } = require("express");

const teamsRouter = Router();
const { getTeamsHandler } = require("../handlers/teamsHandlers");

teamsRouter.get("/", getTeamsHandler);

module.exports = teamsRouter;
