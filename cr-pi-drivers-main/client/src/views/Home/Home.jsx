/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useDispatch } from "react-redux";
import { getDrivers, getTeams } from "../../redux/actions/actions";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filter from "../../components/Filter/Filter";
import style from "../Home/home.module.css";
import TeamFilter from "../../components/TeamFilter/TeamFilter";
import FilterDb from "../../components/FilterDb/FilterDb";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDrivers());
    dispatch(getTeams());
  }, []);

  return (
    <>
      <div className={style.homeContainer}>
        <div className={style.filters}>
          <Filter />
          <SearchBar />
          <TeamFilter />
          <FilterDb />
        </div>
        <CardsContainer />
      </div>
    </>
  );
};

export default Home;
