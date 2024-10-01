import { useNavigate } from "react-router-dom";
import { LOGIN } from "../constants/paths";

export const withAuth = Component => {
  return function AuthenticatedComponent(props) {
    const navigate = useNavigate();
    let user = null;
    try {
      user = JSON.parse(localStorage.getItem("user"));
    } catch (err) {
      console.error("Failed to parse user from localStorage", err);
    }

    if (!user || !user.token) {
      navigate(LOGIN);
      return null;
    }

    return <Component {...props} />;
  };
};
