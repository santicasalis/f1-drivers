import Logo from "../../components/Logo/logo";
import LinkButton from "../../components/LinkButton/LinkButton";
import video from "../../assets/blackVideo.mp4";

import style from "../Landing/landing.module.css";

const Landing = () => {
  return (
    <>
      <div className={style.landingContainer}>
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <div className={style.content}>
          <Logo />
          <LinkButton to="/home" text="Home" />
        </div>
      </div>
    </>
  );
};

export default Landing;
