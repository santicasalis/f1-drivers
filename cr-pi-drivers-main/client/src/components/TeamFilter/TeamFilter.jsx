import { useDispatch, useSelector } from "react-redux";
import { getFilterTeam, getTeams } from "../../redux/actions/actions";
import style from "../TeamFilter/teamFilter.module.css";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const TeamFilter = () => {
  const dispatch = useDispatch();

  const teams = useSelector((state) => state.teams);

  useEffect(() => {
    dispatch(getTeams());
  }, []);
  const filterTeam = (event) => {
    console.log(teams);
    dispatch(getFilterTeam(event.target.value));
  };

  return (
    <>
      <div className={style.teamFilterContainer}>
        <select name="filterByTeam" onChange={filterTeam}>
          {teams.map((team) => (
            <option key={team.id} value={team.name}>
              {team.name}
            </option>
          ))}
        </select>
        {/* <div>
          <button onClick={reset}>Restart</button>
        </div> */}
      </div>
    </>
  );
};

export default TeamFilter;
