import Layout from "../layout";
import { AddMovie, Dashboard, Home, MovieDetails, Movies, NotFound } from "../pages";

import { ADD_MOVIE, DASHBOARD, MOVIE_BASE, MOVIES, NOT_FOUND, ROOT } from "../constants/paths";

export const routes = [
  {
    path: ROOT,
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: DASHBOARD, element: <Dashboard /> },
      { path: ADD_MOVIE, element: <AddMovie /> },
      { path: `${MOVIE_BASE}/:id`, element: <MovieDetails /> },
      { path: MOVIES, element: <Movies /> },
      { path: NOT_FOUND, element: <NotFound /> },
    ],
  },
];
