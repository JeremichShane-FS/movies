import axios from "axios";
import { DASHBOARD, USER } from "../../constants/paths";
import { API_BASE } from "../../constants/urls";
import { authHeader } from "./auth-header";

export const getDashboard = async () => {
  const res = await axios.get(`${API_BASE}${USER}${DASHBOARD}`, { headers: authHeader() });

  return res.data;
};

export const userService = {
  getDashboard,
};
