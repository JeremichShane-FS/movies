import { Home } from "../pages";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const index = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
};
export default index;
