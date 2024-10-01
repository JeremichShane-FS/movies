export const handleApiErrors = errorData => {
  if (!errorData) {
    return { error: "An unknown error occurred" };
  }

  if (errorData.response) {
    if (errorData.response.data.errors) {
      const newErrors = errorData.response.data.errors.reduce((acc, err) => {
        acc[err.param] = err.msg;
        return acc;
      }, {});
      return newErrors;
    } else if (errorData.response.data.error) {
      return { error: errorData.response.data.error };
    } else {
      return { error: "An error occurred" };
    }
  } else if (errorData.request) {
    return { error: "No response received from server" };
  } else {
    return { error: errorData.message || "An error occurred" };
  }
};
