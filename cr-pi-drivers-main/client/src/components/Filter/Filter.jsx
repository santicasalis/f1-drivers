import { useDispatch } from "react-redux";
import { orderDrivers } from "../../redux/actions/actions";

const Filter = () => {
  const dispacth = useDispatch();

  const handleOrder = (event) => {
    dispacth(orderDrivers(event.target.value));
  };

  return (
    <>
      <div>
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
