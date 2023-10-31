import axios from "axios";
import {
  GET_DRIVERS,
  GET_DRIVER,
  ORDER_DRIVER,
  GET_DRIVERS_NAME,
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
