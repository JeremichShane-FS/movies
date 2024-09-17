import { Link } from "react-router-dom";
import { DASHBOARD, MOVIES, ROOT } from "../../constants/paths";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar__list">
        <Link to={ROOT}>
          <li className="navbar__item">Home</li>
        </Link>
        <Link to={MOVIES}>
          <li className="navbar__item">Movies</li>
        </Link>
        <Link to={DASHBOARD}>
          <li className="navbar__item">Dashboard</li>
        </Link>
      </ul>
    </div>
  );
};
export default Navbar;
