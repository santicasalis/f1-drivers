import { useDispatch } from "react-redux";
import { getDriversName, getDrivers } from "../../redux/actions/actions";
import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [searchResults, setSearchResults] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    if (!search) {
      return Promise.reject("El campo de búsqueda está vacío.");
    } else {
      setIsSearch(true);
      dispatch(getDriversName(search))
        .then((response) => {
          setSearchResults(response?.payload);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleReset = () => {
    setSearch("");
    setSearchResults([]);
    setIsSearch(false);
    dispatch(getDrivers());
  };

  return (
    <div>
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
