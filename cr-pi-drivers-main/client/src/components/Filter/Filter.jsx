import { useDispatch } from "react-redux";

import { orderDrivers } from "../../redux/actions/actions";

import style from "../TeamFilter/teamFilter.module.css";

const Filter = () => {
  const dispacth = useDispatch();

  const handleOrder = (event) => {
    dispacth(orderDrivers(event.target.value));
  };

  return (
    <>
      <div className={style.teamFilterContainer}>
        <select onChange={handleOrder}>
          <option value="A">Order</option>
          <option value="A">INCREASING</option>
          <option value="D">DECREASING</option>
          <option value="AZ">ALPHABETIC</option>
          <option value="DOB">Date of Birth</option>
        </select>
      </div>
    </>
  );
};

export default Filter;
