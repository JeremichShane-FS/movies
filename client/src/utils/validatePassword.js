export const validatePassword = (password, errors) => {
  if (password.length < 8) {
    return {
      ...errors,
      password: "Password must be at least 8 characters",
    };
  } else {
    return {
      ...errors,
      password: "",
    };
  }
};
