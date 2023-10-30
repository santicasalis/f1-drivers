/* eslint-disable no-case-declarations */
import { GET_DRIVERS, GET_DRIVER, ORDER_DRIVER } from "../actions/actionTypes";

const initialState = {
  drivers: [],
  driver: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRIVERS:
      return { ...state, drivers: action.payload };
    case GET_DRIVER:
      return { ...state, driver: action.payload };

    case ORDER_DRIVER:
      let driversOrdered;
      if (action.payload === "A")
        driversOrdered = [...state.drivers].sort((a, b) => a.id - b.id);
      if (action.payload === "D")
        driversOrdered = [...state.drivers].sort((a, b) => b.id - a.id);
      if (action.payload === "AZ")
        driversOrdered = [...state.drivers].sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
      if (action.payload === "DOB") {
        driversOrdered = [...state.drivers].sort((a, b) => {
          const dateA = new Date(a.dob);
          const dateB = new Date(b.dob);
          return dateA - dateB;
        });
      }
      return {
        ...state,
        drivers: driversOrdered,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
