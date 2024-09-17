import React, { createContext, useEffect, useState } from "react";
import { API_BASE } from "../constants/urls";

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let ignore = false;
  useEffect(() => {
    if (!ignore) {
      getMovies();
    }
    return () => {
      ignore = true;
    };
  }, []);

  const getMovies = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE}/movies`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      if (data.status) {
        setMovies(data.data);
      } else {
        throw new Error("Failed to fetch movies");
      }
    } catch (err) {
      setError(err.message || "Unexpected Error");
    } finally {
      setLoading(false);
    }
  };

  const refreshMovies = () => {
    getMovies();
  };

  return (
    <MoviesContext.Provider value={{ movies, setMovies, loading, error, refreshMovies }}>
      {children}
    </MoviesContext.Provider>
  );
};
