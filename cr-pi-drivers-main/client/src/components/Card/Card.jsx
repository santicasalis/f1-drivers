import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = (props) => {
  return (
    <div>
      <Link to={`/detail/${props.id}`}>
        <h1>{props.name}</h1>
        <h3>lastname {props.lastname}</h3>
        <p>dob={props.dob}</p>
      </Link>
    </div>
  );
};

export default Card;
