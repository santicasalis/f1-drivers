import { useDispatch } from "react-redux";
import { getDriversName, getDrivers } from "../../redux/actions/actions";
import { useState } from "react";
import style from "../SearchBar/searchBar.module.css";
const Search = () => {
  const [search, setSearch] = useState("");
  // eslint-disable-next-line no-unused-vars

  const [isSearch, setIsSearch] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    if (!search) {
      return alert("the search field is empty");
    } else {
      setIsSearch(true);
      dispatch(getDriversName(search))
        .then(() => {
          setSearch("");
        })
        .catch(() => {
          alert("the driver is not found");
          setSearch("");
        });
    }
  };

  const handleReset = () => {
    setSearch("");

    setIsSearch(false);
    dispatch(getDrivers());
  };

  return (
    <div className={style.searchBarContainer}>
      <input
        type="search"
        onChange={handleChange}
        value={search}
        placeholder="Search by name"
      />
      <button onClick={handleSearch}>Search</button>
      {isSearch && <button onClick={handleReset}>Reset</button>}
    </div>
  );
};

export default Search;
