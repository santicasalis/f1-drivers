import axios from "axios";
import { GET_DRIVERS, GET_DRIVER, ORDER_DRIVER } from "../actions/actionTypes";

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
