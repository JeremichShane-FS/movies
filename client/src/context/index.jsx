import { MoviesContext, MoviesProvider } from "./MoviesContext";
import { UserContext, UserProvider } from "./UserContext";

export const AppContextProvider = ({ children }) => {
  return (
    <UserProvider>
      <MoviesProvider>{children}</MoviesProvider>
    </UserProvider>
  );
};

export { MoviesContext, UserContext };
