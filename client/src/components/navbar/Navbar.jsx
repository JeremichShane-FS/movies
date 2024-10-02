import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DASHBOARD, LOGIN, MOVIES, ROOT, SIGNUP } from "../../constants/paths";
import { UserContext } from "../../context/UserContext";
import "./Navbar.scss";

const Navbar = () => {
  const { currentUser, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(LOGIN);
  };

  return (
    <nav className="navbar">
      <Link to={ROOT} className="navbar__item">
        Home
      </Link>
      <Link to={MOVIES} className="navbar__item">
        Movies
      </Link>
      {currentUser ? (
        <>
          <span onClick={handleLogout} className="navbar__item">
            Logout
          </span>
          <Link to={DASHBOARD} className="navbar__item">
            Dashboard
          </Link>
        </>
      ) : (
        <>
          <Link to={LOGIN} className="navbar__item">
            Login
          </Link>
          <Link to={SIGNUP} className="navbar__item">
            Sign Up
          </Link>
        </>
      )}
    </nav>
  );
};
export default Navbar;
