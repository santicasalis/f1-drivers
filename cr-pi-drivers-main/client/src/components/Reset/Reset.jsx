import { useDispatch } from "react-redux";
import { getDrivers } from "../../redux/actions/actions";
import style from "../SearchBar/searchBar.module.css";

export const Reset = () => {
  const dispatch = useDispatch();
  const reset = () => {
    dispatch(getDrivers());
  };
  return (
    <div className={style.searchBarContainer}>
      <button onClick={reset}>Restart</button>
    </div>
  );
};
