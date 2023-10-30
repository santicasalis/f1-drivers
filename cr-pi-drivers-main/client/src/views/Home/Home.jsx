/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useDispatch } from "react-redux";
import { getDrivers } from "../../redux/actions/actions";
import Filter from "../../components/Filter/Filter";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDrivers());
  }, []);

  return (
    <>
      <h1>HOME</h1>
      <Filter />
      <CardsContainer />
    </>
  );
};

export default Home;
