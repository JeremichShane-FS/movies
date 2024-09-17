import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ADD_MOVIE, DASHBOARD, HOME, MOVIE } from "./constants/paths";
import Layout from "./layout";
import { AddMovie, Dashboard, MovieDetails } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={ADD_MOVIE} element={<AddMovie />} />
          <Route path={MOVIE} element={<MovieDetails />} />
          <Route path={DASHBOARD} element={<Dashboard />} />
          <Route path={HOME} element={<Layout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
