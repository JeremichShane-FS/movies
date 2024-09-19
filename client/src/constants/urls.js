export const API_BASE =
  process.env.NODE_ENV === "development"
    ? `http://localhost:4000/api/v1`
    : import.meta.env.VITE_API_BASE;
