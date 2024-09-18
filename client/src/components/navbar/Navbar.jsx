import { Link } from "react-router-dom";
import { DASHBOARD, MOVIES, ROOT } from "../../constants/paths";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to={ROOT} className="navbar__item">
        Home
      </Link>
      <Link to={MOVIES} className="navbar__item">
        Movies
      </Link>
      <Link to={DASHBOARD} className="navbar__item">
        Dashboard
      </Link>
    </nav>
  );
};
export default Navbar;
