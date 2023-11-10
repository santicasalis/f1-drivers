import { useDispatch } from "react-redux";

import { resetDrivers } from "../../redux/actions/actions";

import style from "../SearchBar/searchBar.module.css";

export const Reset = () => {
  const dispatch = useDispatch();

  const resetAll = () => {
    dispatch(resetDrivers());
  };
  return (
    <div className={style.searchBarContainer}>
      <button onClick={resetAll}>Reset</button>
    </div>
  );
};
