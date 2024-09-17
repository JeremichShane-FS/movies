import setCopyright from "../../utils/copyright";
import "./Footer.scss";

const Footer = () => {
  return <div className="footer">{setCopyright("MoviesDB")}</div>;
};
export default Footer;
