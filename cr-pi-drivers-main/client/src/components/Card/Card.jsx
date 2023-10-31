import { Link } from "react-router-dom";
import style from "../Card/card.module.css";
/* eslint-disable react/prop-types */
const Card = (props) => {
  return (
    <div className={style.cardContainer}>
      <Link className={style.link} to={`/detail/${props.id}`}>
        <h1>{props.name}</h1>
        <h3>{props.lastname}</h3>

        <img className={style.cardImg} src={props.image} alt={props.name} />
        <div>{props.teams}</div>
      </Link>
    </div>
  );
};

export default Card;
