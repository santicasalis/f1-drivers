import { Link } from "react-router-dom";
import style from "../Card/card.module.css";
/* eslint-disable react/prop-types */
const Card = (props) => {
  console.log(props.teams);
  return (
    <Link className={style.link} to={`/detail/${props.id}`}>
      <div className={style.cardContainer}>
        <h1>
          {props.name} {props.lastname}
        </h1>

        <img className={style.cardImg} src={props.image} alt={props.name} />
        <div className={style.teamList}>
          <ul className={style.teamList}>
            {props.teams?.map((team, index) => (
              <li className={style.teamLi} key={index}>
                {team}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default Card;
