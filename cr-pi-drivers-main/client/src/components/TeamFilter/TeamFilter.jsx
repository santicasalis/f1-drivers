//import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDrivers, getFilterTeam } from "../../redux/actions/actions";
//import style from "../TeamFilter/teamFilter.module.css";

// eslint-disable-next-line react/prop-types
const TeamFilter = () => {
  const dispatch = useDispatch();

  const teams = useSelector((state) => state.teams);

  const filterTeam = (event) => {
    dispatch(getFilterTeam(event.target.value));
  };
  const reset = () => {
    dispatch(getDrivers());
  };

  return (
    <>
      <div>
        <select name="filterByTeam" onChange={filterTeam}>
          {teams.map((team) => (
            <option key={team.id} value={team.name}>
              {team.name}
            </option>
          ))}
        </select>
        <div>
          <button onClick={reset}>Restart</button>
        </div>
      </div>
    </>
  );
};

export default TeamFilter;
