import heroImage from "../../assets/images/movies.jpg";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <header className="home__header">
        <h1 className="home__title">Welcome to MoviesDB</h1>
      </header>
      <section className="home__hero">
        <img src={heroImage} alt="Movies" className="home__hero-image" />
        <div className="home__hero-content">
          <h2 className="home__motto">Your Ultimate Movie Database</h2>
          <p className="home__description">
            Discover, explore, and keep track of your favorite movies. Join our community and dive
            into the world of cinema.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
