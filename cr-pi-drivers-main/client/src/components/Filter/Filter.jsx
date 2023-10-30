//Botones/Opciones para filtrar por team, y por si su origen es de la API o de la base de datos (creados por nosotros desde el formulario).
//Botones/Opciones para ordenar tanto ascendentemente como descendentemente los drivers por orden alfabético y por fecha año de nacimiento.

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
