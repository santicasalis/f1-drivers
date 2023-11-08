/* eslint-disable no-unused-vars */
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import style from "../CardsContainer/cardsContainer.module.css";

const CardsContainer = () => {
  const drivers = useSelector((state) => state.drivers);

  const cardsPerPage = 9;

  const [currentPage, setCurrentPage] = useState(0);

  const [filteredDrivers, setFilteredDrivers] = useState([]);

  useEffect(() => {
    const startIndex = currentPage * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const slicedDrivers = drivers.slice(startIndex, endIndex);

    setFilteredDrivers(slicedDrivers);
  }, [currentPage, drivers, cardsPerPage]);

  const nextHandler = () => {
    const pages = (currentPage + 1) * cardsPerPage;
    const totalCards = drivers.length;
    if (pages >= totalCards) return;
    setCurrentPage(currentPage + 1);
  };

  const prevHandler = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const firstHandler = () => {
    setCurrentPage(0);
  };
  const lastHandler = () => {
    const lastPage = Math.floor(drivers.length / 9);
    setCurrentPage(lastPage);
  };
  console.log(filteredDrivers);
  return (
    <div>
      <div className={style.cardsContainer}>
        {filteredDrivers.map((driver) => {
          return (
            <Card
              name={driver.name}
              lastname={driver.lastname}
              dob={driver.dob}
              key={driver.id}
              id={driver.id}
              image={driver.image}
              teams={driver.teams}
            />
          );
        })}
      </div>
      <div className={style.pagination}>
        <button onClick={firstHandler}>First</button>
        <button onClick={prevHandler}>Prev</button>
        <div>{currentPage}</div>
        <button onClick={nextHandler}>Next</button>
        <button onClick={lastHandler}>Last</button>
      </div>
    </div>
  );
};

export default CardsContainer;
