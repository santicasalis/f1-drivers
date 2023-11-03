import axios from "axios";
import {
  GET_DRIVERS,
  GET_DRIVER,
  ORDER_DRIVER,
  GET_DRIVERS_NAME,
  GET_TEAMS,
  FILTER_TEAM,
  GET_CREATED,
  //GET_CREATED,
} from "../actions/actionTypes";

export const getDrivers = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/drivers");

    const drivers = apiData.data;

    dispatch({ type: GET_DRIVERS, payload: drivers });
  };
};

export const getDriver = (id) => {
  return async function (dispatch) {
    const apiData = await axios.get(`http://localhost:3001/drivers/${id}`);

    const driver = apiData.data;
    dispatch({ type: GET_DRIVER, payload: driver });
  };
};

export const orderDrivers = (order) => {
  return { type: ORDER_DRIVER, payload: order };
};

export const getDriversName = (search) => {
  return async function (dispatch) {
    const apiData = await axios.get(
      `http://localhost:3001/drivers?name=${search}`
    );

    const drivers = apiData.data;

    dispatch({ type: GET_DRIVERS_NAME, payload: drivers });
  };
};

export const getTeams = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/teams");
    const teams = apiData.data;
    dispatch({ type: GET_TEAMS, payload: teams });
  };
};
export const getDriverCreated = (createDb) => {
  return async function (dispatch) {
    try {
      dispatch({ type: GET_CREATED, payload: createDb });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getFilterTeam = (filterTeam) => {
  return async function (dispatch) {
    try {
      dispatch({ type: FILTER_TEAM, payload: filterTeam });
    } catch (error) {
      console.log(error);
    }
  };
};
