import { useDispatch } from "react-redux";
import { getDriverCreated } from "../../redux/actions/actions";
import style from "../TeamFilter/teamFilter.module.css";
const FilterDb = () => {
  const dispacth = useDispatch();

  const handleFilter = (event) => {
    dispacth(getDriverCreated(event.target.value));
  };
  return (
    <>
      <div className={style.teamFilterContainer}>
        <select onChange={handleFilter}>
          <option value="ALL">ALL</option>
          <option value="CREATED">CREATED</option>
        </select>
      </div>
    </>
  );
};

export default FilterDb;
