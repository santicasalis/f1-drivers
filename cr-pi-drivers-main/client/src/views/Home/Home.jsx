/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useDispatch } from "react-redux";
import { getDrivers } from "../../redux/actions/actions";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filter from "../../components/Filter/Filter";
import style from "../Home/home.module.css";
import TeamFilter from "../../components/TeamFilter/TeamFilter";
const Home = () => {
  const dispatch = useDispatch();
  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    dispatch(getDrivers());
  }, []);
  const handleShowModal = () => {
    setShowComponent(true);
  };

  const handleCloseModal = () => {
    setShowComponent(false);
  };

  return (
    <>
      <div className={style.homeContainer}>
        <div className={style.filters}>
          <Filter />
          <SearchBar />
          <button onClick={handleShowModal}>Mostrar Componente</button>

          {showComponent && <TeamFilter handleCloseModal={handleCloseModal} />}
        </div>
        <CardsContainer />
      </div>
    </>
  );
};

export default Home;
