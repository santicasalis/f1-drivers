/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import style from "../LinkButton/link.module.css";
const LinkButton = ({ to, text }) => {
  return (
    <Link to={to}>
      <button className={`${style.linkButton} ${style.bn28}`}>{text}</button>
    </Link>
  );
};
export default LinkButton;
