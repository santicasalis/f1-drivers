import Card from "../Card/Card";
import { useSelector } from "react-redux";
// se trae todos los drivers por cada driver rendizar una card

const CardsContainer = () => {
  const drivers = useSelector((state) => state.drivers);
  return (
    <div>
      {drivers.map((driver) => {
        return (
          <Card
            name={driver.name}
            lastname={driver.lastname}
            dob={driver.dob}
            key={driver.id}
            id={driver.id}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
