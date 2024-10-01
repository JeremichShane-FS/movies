import axios from "axios";
import { handleApiErrors } from "../errorHandler";

import { LOGIN, SIGNUP, USER } from "../../constants/paths";
import { API_BASE } from "../../constants/urls";

export const signup = async formData => {
  try {
    const res = await axios.post(`${API_BASE}${USER}${SIGNUP}`, formData);
    if (res.data.token) {
      localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
  } catch (err) {
    const errors = handleApiErrors(err);
    console.error("Signup error:", errors);
    throw errors;
  }
};

export const login = async formData => {
  try {
    const res = await axios.post(`${API_BASE}${USER}${LOGIN}`, formData);
    if (res.data.token) {
      localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
  } catch (err) {
    console.log(err);

    const errors = handleApiErrors(err);
    console.error("Login error:", errors);
    throw errors;
  }
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const authService = {
  signup,
  login,
  logout,
  getUser,
};
