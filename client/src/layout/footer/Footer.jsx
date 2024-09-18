import setCopyright from "../../utils/copyright";
import "./Footer.scss";

const Footer = () => {
  return <footer className="footer">{setCopyright("MoviesDB")}</footer>;
};
export default Footer;
