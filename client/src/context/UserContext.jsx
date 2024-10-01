import { createContext, useEffect, useState } from "react";
import { authService } from "../api/services/auth.service";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);

  let ignore = false;
  useEffect(() => {
    if (!ignore) {
      const user = authService.getUser();
      if (user) {
        setCurrentUser(user);
      }
    }
    return () => {
      ignore = true;
    };
  }, []);

  const logout = () => {
    authService.logout();
    setCurrentUser(false);
  };

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};
