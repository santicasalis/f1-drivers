import { Link } from "react-router-dom";

import LinkButton from "../LinkButton/LinkButton";
import Logo from "../Logo/logo";

import style from "../NavBar/navBar.module.css";

const NavBar = () => {
  return (
    <>
      <div className={style.navBarContainer}>
        <Link to="/home">
          <Logo />
        </Link>
        <LinkButton to="/home" text="Home" />
        <LinkButton to="/create" text="Create" />
      </div>
    </>
  );
};

export default NavBar;
