import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleApiErrors } from "../../api/errorHandler";
import { Button, Form } from "../../components";

import { authService } from "../../api/services/auth.service";
import { DASHBOARD } from "../../constants/paths";
import { validatePassword } from "../../utils/validatePassword";
import "./Signup.scss";

const Signup = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    general: "",
    password: "",
    email: "",
    confirmPassword: "",
  });
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFocus = () => {
    setErrors({
      ...errors,
      general: "",
    });
  };

  const handleBlur = e => {
    const { name, value } = e.target;
    if (name === "password") {
      setErrors(validatePassword(value, errors));
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setErrors({ ...errors, general: "Passwords do not match" });
      return;
    }

    try {
      await authService.signup(formData);
      resetForm();
      navigate(DASHBOARD);
    } catch (error) {
      if (error) {
        setErrors(error);
      } else {
        setErrors({ errors: [{ param: "general", msg: "An unknown error occurred" }] });
      }
    }
  };

  const resetForm = () => {
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({
      general: "",
      password: "",
      email: "",
      confirmPassword: "",
    });
  };

  return (
    <section className="signup">
      <h1 className="signup__title">Sign Up</h1>
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
            value={formData.email}
            onChange={handleChange}
            onFocus={handleFocus}
            required
          />
          <p className={`form__error ${!errors.email ? "form__error--hidden" : ""}`}>
            {errors.email}
          </p>
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
            value={formData.password}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
          />
          <p className={`form__error ${!errors.password ? "form__error--hidden" : ""}`}>
            {errors.password}
          </p>
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="form__input"
            value={formData.confirmPassword}
            onChange={handleChange}
            onFocus={handleFocus}
            required
          />
          <p className={`form__error ${!errors.confirmPassword ? "form__error--hidden" : ""}`}>
            {errors.confirmPassword}
          </p>
        </div>
        <p className={`form__error ${!errors.general ? "form__error--hidden" : ""}`}>
          {errors.general}
        </p>
        <Button type="submit">Sign Up</Button>
      </Form>
    </section>
  );
};

export default Signup;
