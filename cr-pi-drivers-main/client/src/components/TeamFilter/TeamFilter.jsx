import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeams } from "../../redux/actions/actions";
import style from "../TeamFilter/teamFilter.module.css";

// eslint-disable-next-line react/prop-types
const TeamFilter = ({ handleCloseModal }) => {
  const dispatch = useDispatch();
  const [selectedTeams, setSelectedTeams] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (selectedTeams.includes(value)) {
      setSelectedTeams(selectedTeams.filter((team) => team !== value));
    } else {
      setSelectedTeams([...selectedTeams, value]);
    }
  };

  useEffect(() => {
    dispatch(getTeams());
  }, []);
  const teams = useSelector((state) => state.teams);
  console.log(selectedTeams);
  return (
    <>
      <div className={style.modal}>
        <label>Choose Teams to Filter:</label>
        <form className={style.modalContent}>
          {teams.map((team) => (
            <div key={team.id}>
              <input
                type="checkbox"
                name="teams"
                value={team.name}
                checked={selectedTeams.includes(team.name)}
                onChange={handleCheckboxChange}
              />
              <label>{team.name}</label>
            </div>
          ))}
          <button onClick={handleCloseModal}>X</button>
        </form>
      </div>
    </>
  );
};

export default TeamFilter;
