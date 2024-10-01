import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "../../components";

import { authService } from "../../api/services/auth.service";
import { DASHBOARD, SIGNUP } from "../../constants/paths";
import { UserContext } from "../../context";
import "./Login.scss";

const Login = () => {
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleFocus = () => {
    setError("");
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await authService.login(data);
      setCurrentUser(authService.getUser());
      navigate(DASHBOARD);
    } catch (error) {
      console.log(error);
      setError(error.error || "Login failed");
    }
  };

  const onClick = () => {
    navigate(SIGNUP);
  };

  return (
    <section className="login">
      <h1 className="login__title">Login</h1>
      <Form onSubmit={handleSubmit}>
        <div className="form__group">
          <label className="form__label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form__input"
            value={data.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form__input"
            value={data.password}
            onChange={handleChange}
            onFocus={handleFocus}
            required
          />
        </div>
        <p className={`form__error ${error ? "form__error--show" : ""}`}>{error}</p>
        <div className="login__button-container">
          <Button className="login__button" type="submit">
            Login
          </Button>
          <Button className="login__button" type="button" onClick={onClick}>
            Sign Up
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default Login;
