import { useContext } from "react";
import { Link } from "react-router-dom";
import { ADD_MOVIE, HOME } from "../../constants/paths";
import { MoviesContext } from "../../context/MoviesContext";

const Dashboard = () => {
  const { movies, loading, error } = useContext(MoviesContext);
  return (
    <div>
      <h1>Movies:</h1>
      <Link to={HOME}>Home</Link>
      <Link to={ADD_MOVIE}>
        <button>Add Movie</button>
      </Link>
      <ul>
        {loading ? (
          <li>Loading...</li>
        ) : error ? (
          <li>{error}</li>
        ) : (
          movies.map(movie => (
            <li key={movie._id}>
              <Link to={`/movie/${movie._id}`}>{movie.title}</Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Dashboard;
