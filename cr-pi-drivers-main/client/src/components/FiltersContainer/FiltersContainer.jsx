import Filter from "../Filter/Filter";
import FilterDb from "../FilterDb/FilterDb";

import SearchBar from "../SearchBar/SearchBar";
import TeamFilter from "../TeamFilter/TeamFilter";

import style from "../FiltersContainer/filterContainer.module.css";
import { Reset } from "../Reset/Reset";
export const FiltersContainer = () => {
  return (
    <div className={style.FiltersContainer}>
      <SearchBar />
      <div className={style.orderContainer}>
        <Filter />
        <FilterDb />
        <TeamFilter />
        <Reset />
      </div>
    </div>
  );
};
