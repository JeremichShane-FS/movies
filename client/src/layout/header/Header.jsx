import { Link } from "react-router-dom";
import { Navbar } from "../../components";
import { ROOT } from "../../constants/paths";

import Logo from "../../assets/images/director-cut.png";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to={ROOT} className="header__link">
        <div className="header__logo-container">
          <img src={Logo} alt="Logo" className="header__logo" />
          <span className="header__title">MoviesDB</span>
        </div>
      </Link>
      <Navbar />
    </header>
  );
};
export default Header;
