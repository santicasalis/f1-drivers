/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getDrivers, getTeams } from "../../redux/actions/actions";

import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { FiltersContainer } from "../../components/FiltersContainer/FiltersContainer";

import style from "../Home/home.module.css";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDrivers());
    dispatch(getTeams());
  }, []);

  return (
    <>
      <div className={style.homeContainer}>
        <FiltersContainer />

        <CardsContainer />
      </div>
    </>
  );
};

export default Home;
