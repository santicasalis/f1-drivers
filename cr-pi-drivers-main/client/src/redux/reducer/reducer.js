/* eslint-disable no-case-declarations */
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

const initialState = {
  drivers: [],
  driver: [],
  driversBackUp: [],
  driversFiltered: [],
  teams: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRIVERS:
      return {
        ...state,
        drivers: action.payload,
        driversBackUp: action.payload,
      };
    case GET_DRIVER:
      return { ...state, driver: action.payload };
    case GET_TEAMS:
      return { ...state, teams: action.payload };

    case ORDER_DRIVER:
      // eslint-disable-next-line no-case-declarations
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
    case GET_DRIVERS_NAME:
      return { ...state, drivers: action.payload };
    case GET_CREATED:
      let allDriverss;
      let filterbyDb;
      if (action.payload === "ALL") {
        return {
          ...state,
          drivers: [...state.driversBackUp],
        };
      }
      if (action.payload === "CREATED") {
        (allDriverss = [...state.driversBackUp]),
          (filterbyDb = allDriverss.filter((create) => {
            return create.id && create.id.length > 4;
          }));
      }
      return {
        ...state,
        drivers: filterbyDb,
      };

    case FILTER_TEAM:
      const allDrivers = [...state.driversBackUp];
      const filteredDrivers = allDrivers.filter((team) => {
        return team.teams && team.teams.includes(action.payload);
      });
      return {
        ...state,
        drivers: filteredDrivers,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
