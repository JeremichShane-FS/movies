import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <header>
        <h1>Movies List Homepage</h1>
        <Link to="/dashboard">Dashboard</Link>
      </header>
    </div>
  );
};
export default Home;
