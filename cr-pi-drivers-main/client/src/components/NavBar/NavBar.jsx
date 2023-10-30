import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Link to="/home">HOME</Link>
      <Link to="/create">FORM</Link>
    </>
  );
};

export default NavBar;
