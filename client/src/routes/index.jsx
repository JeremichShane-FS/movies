import { withAuth } from "../api/withAuth";
import {
  ADD_MOVIE,
  DASHBOARD,
  LOGIN,
  MOVIE_DETAILS,
  MOVIES,
  NOT_FOUND,
  ROOT,
  SIGNUP,
} from "../constants/paths";
import Layout from "../layout";
import { AddMovie, Dashboard, Home, Login, MovieDetails, Movies, NotFound, Signup } from "../pages";

// Protected routes
const AuthenticatedDashboard = withAuth(Dashboard);
const AuthenticatedAddMovie = withAuth(AddMovie);

export const routes = [
  {
    path: ROOT,
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: SIGNUP, element: <Signup /> },
      { path: LOGIN, element: <Login /> },
      { path: MOVIE_DETAILS, element: <MovieDetails /> },
      { path: MOVIES, element: <Movies /> },
      { path: DASHBOARD, element: <AuthenticatedDashboard /> },
      { path: ADD_MOVIE, element: <AuthenticatedAddMovie /> },
      { path: NOT_FOUND, element: <NotFound /> },
    ],
  },
];
